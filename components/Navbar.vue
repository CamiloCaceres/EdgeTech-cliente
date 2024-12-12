<template>
  <div class="border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo Section -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-blue-600">
            EdgeTech
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <UButton
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.to"
            variant="ghost"
            color="gray"
          >
            {{ item.label }}
          </UButton>

          <!-- Action Buttons -->
          <div class="flex items-center space-x-4">
            <UButton
              variant="soft"
              color="blue"
              to="/demo"
            >
              Solicitar Demo
            </UButton>
            <UButton
              variant="solid"
              color="blue"
              target="_blank"
              to="https://github.com/CamiloCaceres"
            >
              Contactar
            </UButton>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <UButton
            variant="ghost"
            color="gray"
            @click="isOpen = !isOpen"
            :icon="isOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'"
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
      <USlideOver v-model="isOpen" class="md:hidden">
        <div class="py-4 space-y-4">
          <UButton
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.to"
            variant="ghost"
            color="gray"
            block
          >
            {{ item.label }}
          </UButton>

          <!-- Mobile Action Buttons -->
          <div class="space-y-3 pt-4">
            <UButton
              variant="soft"
              color="blue"
              to="/demo"
              block
            >
              Solicitar Demo
            </UButton>
            <UButton
              variant="solid"
              color="blue"
              to="/contacto"
              block
            >
              Contactar
            </UButton>
          </div>
        </div>
      </USlideOver>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const navigationItems = [
  {
    label: 'Módulos',
    to: '/modulos'
  },
  {
    label: 'Tecnología',
    to: '/tecnologia'
  },
  {
    label: 'Precios',
    to: '/precios'
  }
]
</script>
