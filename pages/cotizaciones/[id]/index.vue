<!-- pages/cotizaciones/[id].vue -->
<template>
  <UContainer class="mt-6 max-w-5xl">
    <div v-if="loading">
      <USkeleton class="h-32" />
    </div>

    <template v-else>
      <!-- Header -->
      <div class="flex justify-between items-start mb-6">
        <div>
          <div class="flex items-center gap-3">
            <h1 class="text-2xl font-bold">Quotation #{{ quotation?.id }}</h1>
            <UBadge
              :color="getStatusColor(quotation?.status)"
              :label="quotation?.status"
              size="lg"
            />
          </div>
          <p class="text-gray-500 mt-1">
            Created {{ formatDate(quotation?.created) }}
          </p>
        </div>

        <div class="flex gap-3">
          <UButton
            color="gray"
            variant="soft"
            icon="i-heroicons-arrow-left"
            to="/cotizaciones"
          >
            Back
          </UButton>
          <UDropdown
            :items="actionItems"
            :popper="{ placement: 'bottom-start' }"
          >
            <UButton
              color="gray"
              icon="i-heroicons-ellipsis-horizontal"
              label="Actions"
            />
          </UDropdown>
        </div>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Left Column - Client & Quotation Details -->
        <div class="md:col-span-2 space-y-6">
          <!-- Client Information -->
          <UCard>
            <template #header>
              <h2 class="text-lg font-semibold">Client Information</h2>
            </template>

            <div class="space-y-4">
              <div>
                <div class="font-medium text-lg">
                  {{ quotation?.expand?.client?.name }}
                </div>
                <div class="text-gray-500">
                  {{ quotation?.expand?.client?.email }}
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm text-gray-500">Phone</div>
                  <div>{{ quotation?.expand?.client?.phone }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Address</div>
                  <div>{{ quotation?.expand?.client?.address }}</div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Items Table -->
          <UCard>
            <template #header>
              <h2 class="text-lg font-semibold">Items</h2>
            </template>

            <UTable
              :columns="itemColumns"
              :rows="quotation?.expand?.['quotation_items(quotation)'] || []"
            >
              <!-- Product Name -->
              <template #product-data="{ row }">
                {{ row.expand?.product?.name }}
              </template>

              <!-- Quantity -->
              <template #quantity-data="{ row }">
                {{ row.quantity }}
              </template>

              <!-- Unit Price -->
              <template #unit_price-data="{ row }">
                {{ formatCurrency(row.unit_price) }}
              </template>

              <!-- Total -->
              <template #total-data="{ row }">
                {{ formatCurrency(row.quantity * row.unit_price) }}
              </template>
            </UTable>

            <!-- Totals -->
            <template #footer>
              <div class="border-t pt-4">
                <div class="flex justify-end">
                  <div class="w-64">
                    <div class="flex justify-between py-1">
                      <span class="font-medium">Subtotal:</span>
                      <span>{{ formatCurrency(calculateSubtotal()) }}</span>
                    </div>
                    <div
                      class="flex justify-between py-1 border-t border-gray-200"
                    >
                      <span class="font-medium">Total:</span>
                      <span class="text-lg font-bold">{{
                        formatCurrency(calculateSubtotal())
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </UCard>

          <!-- Notes -->
          <UCard v-if="quotation?.notes">
            <template #header>
              <h2 class="text-lg font-semibold">Notes</h2>
            </template>
            <p class="whitespace-pre-line">{{ quotation?.notes }}</p>
          </UCard>
        </div>

        <!-- Right Column - Timeline & Actions -->
        <div class="space-y-6">
          <!-- Status Timeline -->
          <UCard>
            <template #header>
              <h2 class="text-lg font-semibold">Timeline</h2>
            </template>

            <div class="space-y-6">
              <div
                v-for="(event, index) in timeline"
                :key="index"
                class="flex gap-3"
              >
                <div class="flex flex-col items-center">
                  <div
                    class="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center"
                  >
                    <UIcon
                      :name="event.icon"
                      class="w-4 h-4 text-primary-500"
                    />
                  </div>
                  <div
                    v-if="index !== timeline.length - 1"
                    class="w-px h-full bg-gray-200 my-2"
                  />
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium">{{ event.title }}</div>
                  <div class="text-sm text-gray-500">
                    {{ formatDate(event.date) }}
                  </div>
              
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </template>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const { pb } = usePocketBase();
const quotationId = route.params.id as string;

// State
const loading = ref(true);
const quotation = ref<any>(null);

// Table columns for items
const itemColumns = [
  {
    key: "product",
    label: "Product",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "unit_price",
    label: "Unit Price",
  },
  {
    key: "total",
    label: "Total",
  },
];

// Action items for dropdown
const actionItems = computed(() => [
  [
    {
      label: "Edit Quotation",
      icon: "i-heroicons-pencil-square-20-solid",
      to: `/cotizaciones/${quotationId}/edit`,
    },
    {
      label: "Download PDF",
      icon: "i-heroicons-document-arrow-down-20-solid",
      click: () => downloadPdf(),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
      click: () => duplicateQuotation(),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: () => confirmDelete(),
    },
  ],
]);

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
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function calculateSubtotal(): number {
  const items = quotation.value?.expand?.["quotation_items(quotation)"] || [];
  return items.reduce((total: number, item: any) => {
    return total + item.quantity * item.unit_price;
  }, 0);
}

// Actions
async function downloadPdf() {
  try {
    const { generateQuotationPDF } = await import("@/utils/pdfService");

    // Create a plain object copy of the quotation data
    const plainQuotation = {
      ...quotation.value,
      expand: {
        client: { ...quotation.value.expand.client },
        "quotation_items(quotation)": quotation.value.expand[
          "quotation_items(quotation)"
        ]?.map((item: any) => ({
          expand: {
            product: {
              name: item.expand?.product?.name || "Unknown Product",
            },
          },
          quantity: item.quantity,
          unit_price: item.unit_price,
        })),
      },
    };

    const pdfDoc = generateQuotationPDF(plainQuotation);
    // Download the PDF
    pdfDoc.download(`quotation-${quotation.value.id}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    useToast().add({
      title: "Error",
      description: "Failed to generate PDF. Please try again.",
      color: "red",
    });
  }
}

async function duplicateQuotation() {
  try {
    // Create new quotation
    const newQuotation = await pb.collection("quotations").create({
      client: quotation.value.client,
      date: new Date().toISOString().split("T")[0],
      status: "draft",
      notes: `${quotation.value.notes} (Copy)`,
      total: calculateSubtotal(),
    });

    // Duplicate items
    const items = quotation.value.expand["quotation_items(quotation)"];
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

    // Navigate to new quotation
    navigateTo(`/cotizaciones/${newQuotation.id}`);
  } catch (error) {
    console.error("Error duplicating quotation:", error);
  }
}

async function confirmDelete() {
/*   const confirmed = await useConfirm({
    title: "Delete Quotation",
    message:
      "Are you sure you want to delete this quotation? This action cannot be undone.",
    button: {
      color: "red",
      label: "Delete",
    },
  }); */

  /* add proper confirmation, now it wont delet aything for safety */
  if (false) {
    try {
      await pb.collection("quotations").delete(quotationId);
      navigateTo("/cotizaciones");
    } catch (error) {
      console.error("Error deleting quotation:", error);
    }
  }
}

// Fetch quotation data
async function fetchQuotation() {
  loading.value = true;
  try {
    const record = await pb.collection("quotations").getOne(quotationId, {
      expand: "client,quotation_items(quotation),quotation_items(quotation).product",
    });
    quotation.value = record;
  } catch (error) {
    console.error("Error fetching quotation:", error);
  } finally {
    loading.value = false;
  }
}

// Timeline data
const timeline = computed(() => {
  if (!quotation.value) return [];

  const events = [
    {
      title: "Quotation Created",
      date: quotation.value.created,
      icon: "i-heroicons-document-plus",
    },
  ];

  if (quotation.value.status !== "draft") {
    events.push({
      title: "Quotation Sent",
      date: quotation.value.updated,
      icon: "i-heroicons-paper-airplane",
    });
  }

  if (quotation.value.status === "approved") {
    events.push({
      title: "Quotation Approved",
      date: quotation.value.updated,
      icon: "i-heroicons-check-circle",
    });
  }

  if (quotation.value.status === "rejected") {
    events.push({
      title: "Quotation Rejected",
      date: quotation.value.updated,
      icon: "i-heroicons-x-circle",
    });
  }

  return events;
});

// Initial fetch
onMounted(() => {
  fetchQuotation();
});
</script>
