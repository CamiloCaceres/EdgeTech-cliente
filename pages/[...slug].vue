<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
    <div class="max-w-2xl w-full text-center space-y-8">
      <!-- Error Illustration -->
      <div class="relative">
        <h1 class="text-9xl font-bold text-gray-200">404</h1>
        <div class="absolute inset-0 flex items-center justify-center">
        </div>
      </div>
      
      <!-- Error Message -->
      <div class="space-y-4">
        <span class="text-6xl">🚧</span>
        <h2 class="text-3xl font-bold text-gray-900">
          ¡Sitio en Construcción!
        </h2>
        <p class="text-lg text-gray-600">
          
Estamos trabajando arduamente en nuestro sitio web. Esta sección aún no está disponible.
        </p>
      </div>

      <!-- Suggestions -->
      <div class="bg-white rounded-xl shadow-sm p-6 space-y-4">
        <h3 class="text-lg font-semibold text-gray-900">
          Podrías intentar:
        </h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center justify-center gap-2">
            <span class="text-blue-600">•</span>
            Verificar la URL por errores de escritura
          </li>
          <li class="flex items-center justify-center gap-2">
            <span class="text-blue-600">•</span>
            Regresar a la página anterior
          </li>
          <li class="flex items-center justify-center gap-2">
            <span class="text-blue-600">•</span>
            Ir a nuestra página principal
          </li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          @click="goBack"
          class="px-6 py-3 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <span class="transform rotate-180">➜</span>
          Regresar
        </button>
        <NuxtLink 
          to="/"
          class="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          Ir al Inicio
          <span>🏠</span>
        </NuxtLink>
      </div>

      <!-- Help Link -->
      <div class="text-gray-500">
        ¿Necesitas ayuda? 
        <NuxtLink 
          to="/contacto" 
          class="text-blue-600 hover:text-blue-800 underline"
        >
          Contáctanos
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.length > 1
    ? window.history.back()
    : navigateTo('/')
}
</script>

<style scoped>
/* Optional: Add some animation to the 404 text */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.text-9xl {
  animation: float 3s ease-in-out infinite;
}
</style>