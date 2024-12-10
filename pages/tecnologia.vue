<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-800">
      <div class="container mx-auto px-6 py-28">
        <div class="flex flex-col items-center text-center text-white">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Stack Tecnológico Moderno para Desarrollo Ágil
          </h1>
          <p class="text-xl md:text-2xl mb-8">
            Tecnologías cuidadosamente seleccionadas para desarrollo rápido y
            código reutilizable
          </p>
        </div>
      </div>
    </header>

    <!-- Backend Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Backend: Potencia y Flexibilidad
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard>
            <div class="flex items-center mb-6">
              <Icon
                name="ph:database-bold"
                class="w-8 h-8 text-blue-600 mr-3"
              />
              <h3 class="text-2xl font-bold text-blue-800">PocketBase</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Nuestra solución principal de backend que acelera el desarrollo
            </p>
            <ul class="space-y-4">
              <li
                v-for="feature in pocketbaseFeatures"
                :key="feature"
                class="flex items-start"
              >
                <span class="text-blue-600 mr-2">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </UCard>

          <UCard>
            <div class="flex items-center mb-6">
              <Icon
                name="ph:lightning-bold"
                class="w-8 h-8 text-blue-600 mr-3"
              />
              <h3 class="text-2xl font-bold text-blue-800">FastAPI</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Para operaciones especializadas y procesamiento avanzado
            </p>
            <ul class="space-y-4">
              <li
                v-for="feature in fastapiFeatures"
                :key="feature"
                class="flex items-start"
              >
                <span class="text-blue-600 mr-2">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Frontend Section -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Frontend: Arquitectura Modular
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard>
            <div class="flex items-center mb-6">
              <Icon name="ph:package-bold" class="w-8 h-8 text-blue-600 mr-3" />
              <h3 class="text-2xl font-bold text-blue-800">Paquetes NPM</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Distribución modular vía registro NPM
            </p>
            <ul class="space-y-4">
              <li
                v-for="feature in npmFeatures"
                :key="feature"
                class="flex items-start"
              >
                <span class="text-blue-600 mr-2">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </UCard>

          <UCard>
            <div class="flex items-center mb-6">
              <Icon
                name="ph:git-branch-bold"
                class="w-8 h-8 text-blue-600 mr-3"
              />
              <h3 class="text-2xl font-bold text-blue-800">Monorepo</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Desarrollo unificado en un solo repositorio
            </p>
            <ul class="space-y-4">
              <li
                v-for="feature in monorepoFeatures"
                :key="feature"
                class="flex items-start"
              >
                <span class="text-blue-600 mr-2">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const pocketbaseFeatures = [
  "Base de datos en tiempo real con autenticación integrada",
  "APIs REST y Realtime autogeneradas",
  "Panel de administración incluido",
  "Despliegue simple con un solo ejecutable",
  "Escalable y fácil de mantener",
  "Perfecto para prototipos rápidos",
];

const fastapiFeatures = [
  "Generación de PDFs de alto rendimiento",
  "Procesamiento OCR con soporte asíncrono",
  "Extracción inteligente de información de documentos",
  "Documentación API automática con Swagger",
  "Alto rendimiento y baja latencia",
  "Integración perfecta con servicios de IA",
];

const npmFeatures = [
  "Versionado independiente de módulos",
  "Fácil integración en proyectos existentes",
  "Actualizaciones granulares por módulo",
  "Distribución simplificada",
  "Control preciso de dependencias",
];

const monorepoFeatures = [
  "Desarrollo coordinado de múltiples módulos",
  "Compartir código y componentes eficientemente",
  "Testing integrado de todo el sistema",
  "Gestión simplificada de dependencias",
  "Despliegues coordinados",
];
</script>
