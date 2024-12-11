<!-- pages/cotizaciones/nueva.vue -->
<template>
    <UContainer class="max-w-3xl mt-6">
      <h1 class="text-2xl font-bold mb-6">Crear Nueva Cotización</h1>
      
      <form @submit.prevent="handleSubmit">
        <!-- Client Selection -->
        <div class="space-y-6 mb-8">
          <UFormGroup label="Cliente" required>
            <USelect
              v-model="selectedClient"
              :options="clients?.map(client => ({ id: client.id, name: client.name })) || []"
              option-attribute="name"
              value-attribute="id"
              placeholder="Seleccionar un cliente"
              searchable
              required
            />
          </UFormGroup>
  
          <!-- Date -->
          <UFormGroup label="Fecha" required>
            <UInput
              v-model="quotationDate"
              type="date"
              required
            />
          </UFormGroup>
  
          <!-- Products Section -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="text-lg font-semibold mb-4">Productos</h2>
            
            <!-- Add overflow-y-auto to the container and add padding-right -->
            <div v-auto-animate class=" pr-3">
              <div  v-for="(item, index) in items" :key="index" class="mb-4 p-4 bg-white rounded-lg shadow-sm">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <!-- Product Selection -->
                  <UFormGroup label="Producto">
                    <USelect
                      v-model="item.productId"
                      :options="products?.map(product => ({ id: product.id, name: product.name })) || []"
                      option-attribute="name"
                      value-attribute="id"
                      placeholder="Seleccionar un producto"
                      searchable
                      @update:model-value="updateUnitPrice(index)"
                    />
                  </UFormGroup>
  
                  <!-- Quantity -->
                  <UFormGroup label="Cantidad">
                    <UInput
                      v-model.number="item.quantity"
                      type="number"
                      min="1"
                      :step="1"
                    />
                  </UFormGroup>
  
                  <!-- Unit Price (read-only) -->
                  <UFormGroup label="Precio Unitario">
                    <UInput
                      v-model.number="item.unitPrice"
                      type="number"
                      readonly
                      disabled
                    />
                  </UFormGroup>
                </div>
  
                <!-- Remove Item Button -->
                <UButton
                  v-if="items.length > 1"
                  color="red"
                  variant="soft"
                  icon="i-heroicons-trash"
                  size="sm"
                  class="mt-2"
                  @click="removeItem(index)"
                >
                  Eliminar
                </UButton>
              </div>
            </div>
  
            <!-- Add Product Button -->
            <UButton
              color="gray"
              variant="soft"
              icon="i-heroicons-plus"
              class="mt-4"
              @click="addItem"
            >
              Agregar Producto
            </UButton>
          </div>

          <!-- Rest of the form remains the same -->
          <UFormGroup label="Notas">
            <UTextarea
              v-model="notes"
              :rows="3"
              placeholder="Ingrese notas adicionales..."
            />
          </UFormGroup>
  
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="text-right">
              <p class="text-lg">
                Total: {{ formatCurrency(calculateTotal()) }}
              </p>
            </div>
          </div>
  
          <div class="flex justify-end gap-4 mt-6">
            <UButton
              color="gray"
              variant="soft"
              @click="$router.push('/quotations')"
            >
              Cancelar
            </UButton>
            <UButton
              :loading="isSubmitting"
              type="submit"
              color="primary"
            >
              Crear Cotización
            </UButton>
          </div>
        </div>
      </form>
    </UContainer>
</template>
  
  <script setup lang="ts">
  interface Client {
    id: string
    name: string
  }
  
  interface Product {
    id: string
    name: string
    price: number
  }
  
  interface QuotationItem {
    productId: string
    quantity: number
    unitPrice: number
  }
  
  const {pb} = usePocketBase()
  
  // State
  const selectedClient = ref<string>('')
  const quotationDate = ref(new Date().toISOString().split('T')[0])
  const notes = ref('')
  const items = ref<QuotationItem[]>([{
    productId: '',
    quantity: 1,
    unitPrice: 0
  }])

  const isSubmitting = ref(false)
  
  // Fetch clients and products
  const { data: clients } = await useAsyncData('clients', async () => {
    try {
      const records = await pb.collection('clients').getList(1, 50)
      return records.items || [] // Ensure we return an empty array if no items
    } catch (error) {
      console.error('Error fetching clients:', error)
      return []
    }
  })
  
  const { data: products } = await useAsyncData('products', async () => {
    try {
      const records = await pb.collection('products').getList(1, 50)
      return records.items || [] // Ensure we return an empty array if no items
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  })
  
  // Add a computed property to check if data is ready
  const isDataLoaded = computed(() => {
    return !!clients.value && !!products.value
  })
  
  // Methods
  function addItem() {
    items.value.push({
      productId: '',
      quantity: 1,
      unitPrice: 0
    })
  }
  
  function removeItem(index: number) {
    items.value.splice(index, 1)
  }
  
  function updateUnitPrice(index: number) {
    const productId = items.value[index].productId
    const product = products.value?.find(p => p.id === productId)
    if (product) {
      items.value[index].unitPrice = product.price
    }
  }
  
  function calculateTotal(): number {
    return items.value.reduce((total, item) => {
      return total + (item.quantity * item.unitPrice)
    }, 0)
  }
  
  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(amount)
  }
  
  async function handleSubmit() {
    isSubmitting.value = true
    try {
      // Validate required fields
      if (!selectedClient.value) {
        throw new Error('Por favor seleccione un cliente')
      }

      // Validate items
      if (!items.value?.length) {
        throw new Error('Por favor agregue al menos un producto')
      }

      // Validate each item has a product selected
      const invalidItems = items.value.some(item => !item.productId)
      if (invalidItems) {
        throw new Error('Por favor seleccione productos para todos los items')
      }

      // Create the quotation
      const quotation = await pb.collection('quotations').create({
        client: selectedClient.value,
        date: quotationDate.value,
        notes: notes.value,
        status: 'draft',
        total: calculateTotal()
      })

      // Create quotation items (only if quotation was created successfully)
      if (quotation && items.value) {
        await Promise.all(items.value.map(item => 
          pb.collection('quotation_items').create({
            quotation: quotation.id,
            product: item.productId,
            quantity: item.quantity,
            unit_price: item.unitPrice
          })
        ))
      }

      // Navigate to quotations list
      await navigateTo(`/cotizaciones/${quotation.id}`)
    } catch (error) {
      console.error('Error al crear la cotización:', error)
      alert(error instanceof Error ? error.message : 'Ocurrió un error al crear la cotización')
    } finally {
      isSubmitting.value = false
    }
  }
  </script>