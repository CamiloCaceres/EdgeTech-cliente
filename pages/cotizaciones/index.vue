<!-- pages/cotizaciones/index.vue -->
<template>
  <UContainer>
    <div class="flex justify-between items-center my-6">
      <h1 class="text-2xl font-bold">Cotizaciones</h1>
      <UButton to="/cotizaciones/nueva" color="primary" icon="i-heroicons-plus">
        Nueva Cotización
      </UButton>
    </div>

    <!-- Filtros -->
    <div class="mb-6 bg-gray-50 p-4 rounded-lg">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Búsqueda -->
        <UInput
          v-model="search"
          icon="i-heroicons-magnifying-glass"
          placeholder="Buscar cotizaciones..."
          @input="handleSearch"
        />

        <!-- Filtro de Estado -->
        <USelect
          v-model="statusFilter"
          :options="statusOptions"
          placeholder="Filtrar por estado"
          @update:modelValue="handleSearch"
        />

        <!-- Rango de Fechas -->
        <UInput
          v-model="dateFrom"
          type="date"
          placeholder="Fecha desde"
          @update:modelValue="handleSearch"
        />
        <UInput
          v-model="dateTo"
          type="date"
          placeholder="Fecha hasta"
          @update:modelValue="handleSearch"
        />
      </div>
    </div>

    <!-- Tabla de Cotizaciones -->
    <UTable
      :rows="quotations"
      :columns="columns"
      :loading="loading"
      :empty-state="{
        icon: 'i-heroicons-document-text',
        label: 'No se encontraron cotizaciones',
      }"
    >
      <!-- Plantillas personalizadas para celdas -->
      <template #status-data="{ row }">
        <UBadge :color="getStatusColor(row.status)" :label="row.status" />
      </template>

      <template #client-data="{ row }">
        {{ row.expand?.client?.name }}
      </template>

      <template #date-data="{ row }">
        {{ formatDate(row.date) }}
      </template>

      <template #total-data="{ row }">
        {{ formatCurrency(row.total) }}
      </template>

      <template #actions-data="{ row }">
        <div class="flex items-center gap-2">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-eye"
            size="xs"
            :to="`/cotizaciones/${row.id}`"
          />
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-pencil-square"
            size="xs"
            :to="`/cotizaciones/${row.id}/edit`"
          />
          <UPopover>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-vertical"
              size="xs"
            />
            <template #panel>
              <div class="p-2 space-y-1">
               
                <UButton
                  block
                  variant="ghost"
                  @click="duplicateQuotation(row.id)"
                >
                  Duplicar
                </UButton>
                <UButton
                  block
                  color="red"
                  variant="ghost"
                  @click="confirmDelete(row.id)"
                >
                  Eliminar
                </UButton>
              </div>
            </template>
          </UPopover>
        </div>
      </template>
    </UTable>

    <!-- Paginación -->
    <div class="mt-4 flex justify-between items-center">
      <p class="text-sm text-gray-600">
        Mostrando {{ startIndex + 1 }} a {{ endIndex }} de
        {{ totalItems }} cotizaciones
      </p>
      <UPagination
        v-model="page"
        :total="totalPages"
        :ui="{ rounded: 'rounded-lg' }"
      />
    </div>

    <!-- Modal de Confirmación de Eliminación -->
    <UModal v-model="showDeleteModal">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900">
              Eliminar Cotización
            </h3>
          </div>
        </template>

        <p class="text-sm text-gray-500">
          ¿Está seguro de que desea eliminar esta cotización? Esta acción no se puede
          deshacer.
        </p>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton
              color="gray"
              variant="soft"
              @click="showDeleteModal = false"
            >
              Cancelar
            </UButton>
            <UButton color="red" @click="deleteQuotation">Eliminar</UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </UContainer>
</template>

<script setup lang="ts">
interface Quotation {
  id: string;
  date: string;
  status: string;
  total: number;
  expand?: {
    client?: {
      name: string;
    };
  };
}

const { pb } = usePocketBase();

// Table columns configuration
const columns = [
  {
    key: "date",
    label: "Fecha",
    sortable: true,
  },
  {
    key: "client",
    label: "Cliente",
    sortable: true,
  },
  {
    key: "status",
    label: "Estado",
    sortable: true,
  },
  {
    key: "total",
    label: "Total",
    sortable: true,
  },
  {
    key: "actions",
    label: "Acciones",
    sortable: false,
  },
];

// State
const search = ref("");
const statusFilter = ref("");
const dateFrom = ref("");
const dateTo = ref("");
const page = ref(1);
const perPage = ref(10);
const loading = ref(false);
const quotations = ref<Quotation[]>([]);
const totalItems = ref(0);
const showDeleteModal = ref(false);
const quotationToDelete = ref<string | null>(null);

// Computed
const totalPages = computed(() => Math.ceil(totalItems.value / perPage.value));
const startIndex = computed(() => (page.value - 1) * perPage.value);
const endIndex = computed(() =>
  Math.min(startIndex.value + perPage.value, totalItems.value)
);

const statusOptions = [
  { label: "Todos", value: "" },
  { label: "Borrador", value: "draft" },
  { label: "Enviada", value: "sent" },
  { label: "Aprobada", value: "approved" },
  { label: "Rechazada", value: "rejected" },
];

// Methods
function getStatusColor(status: string): "gray" | "blue" | "green" | "red" {
  const colors: Record<string, "gray" | "blue" | "green" | "red"> = {
    draft: "gray",
    sent: "blue",
    approved: "green",
    rejected: "red",
  };
  return colors[status] || "gray";
}


function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

async function fetchQuotations() {
  loading.value = true;
  try {
    // Build filter string
    const filter = [];
    if (search.value) {
      filter.push(`client.name ~ "${search.value}"`);
    }
    if (statusFilter.value) {
      filter.push(`status = "${statusFilter.value}"`);
    }
    if (dateFrom.value) {
      filter.push(`date >= "${dateFrom.value}"`);
    }
    if (dateTo.value) {
      filter.push(`date <= "${dateTo.value}"`);
    }

    const records = await pb
      .collection("quotations")
      .getList(page.value, perPage.value, {
        sort: "-created",
        filter: filter.join(" && "),
        expand: "client",
      });

    quotations.value = records.items as unknown as Quotation[];
    totalItems.value = records.totalItems;
  } catch (error) {
    console.error("Error fetching quotations:", error);
  } finally {
    loading.value = false;
  }
}

// Handlers
function handleSearch() {
  page.value = 1;
  fetchQuotations();
}

function confirmDelete(id: string) {
  quotationToDelete.value = id;
  showDeleteModal.value = true;
}

async function deleteQuotation() {
  if (!quotationToDelete.value) return;

  try {
    await pb.collection("quotations").delete(quotationToDelete.value);
    showDeleteModal.value = false;
    quotationToDelete.value = null;
    await fetchQuotations();
  } catch (error) {
    console.error("Error deleting quotation:", error);
  }
}

async function duplicateQuotation(id: string) {
  try {
    // Fetch the original quotation with its items
    const original = await pb.collection("quotations").getOne(id, {
      expand: "quotation_items(quotation)",
    });

    // Create new quotation
    const newQuotation = await pb.collection("quotations").create({
      client: original.client,
      date: new Date().toISOString().split("T")[0],
      status: "draft",
      notes: `${original.notes} (Copy)`,
      total: original.total,
    });

    // Duplicate items
    const items = original.expand?.["quotation_items(quotation)"];
    await Promise.all(
      items.map((item: any) =>
        pb.collection("quotation_items").create({
          quotation: newQuotation.id,
          product: item.product,
          quantity: item.quantity,
          unit_price: item.unit_price,
        })
      )
    );

    await fetchQuotations();
  } catch (error) {
    console.error("Error duplicating quotation:", error);
  }
}

// Watch page changes
watch(page, () => {
  fetchQuotations();
});

// Initial fetch
onMounted(() => {
  fetchQuotations();
});
</script>
