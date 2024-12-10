<template>
    <!-- Hero Section -->
    <div class="min-h-screen">
      <header class="bg-gradient-to-r from-blue-600 to-blue-800">
        <div class="container mx-auto px-6 py-28">
          <div class="flex flex-col items-center text-center text-white">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforma tu Negocio: Del Papel a lo Digital - Sin Complicaciones
            </h1>
            <p class="text-xl md:text-2xl mb-8">
              Soluciones digitales hechas a la medida de tu PyME
            </p>
            <button class="bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors">
              Comienza Tu Transformación Digital
            </button>
          </div>
        </div>
      </header>
  
      <!-- Value Proposition Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            Digitalización que se Adapta a Tu Negocio
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UCard v-for="(value, index) in valueProps" :key="index" 
                 class="bg-white p-8 rounded-lg shadow-md ">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon :name="value.icon" class="w-8 h-8"/>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">{{ value.title }}</h3>
                <p class="text-gray-600">{{ value.description }}</p>
              </div>
            </UCard>
          </div>
        </div>
      </section>
  
      <!-- Modules Section -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            Módulos Diseñados para Tu Negocio
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="module in modules" :key="module.title" 
                 class="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 class="text-2xl font-bold mb-6 text-blue-800">{{ module.title }}</h3>
              <ul class="space-y-4">
                <li v-for="feature in module.features" :key="feature" 
                    class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Technology Section -->
      <section class="py-24 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Potenciado por Inteligencia Artificial
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprovecha el poder de la IA para optimizar tus operaciones y tomar decisiones más inteligentes
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div class="mb-6">
                <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ph:database-bold" class="w-7 h-7 text-blue-600"/>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">
                  Sistemas RAG Avanzados
                </h3>
                <p class="text-gray-600">
                  Consulta y analiza documentos y datos de forma inteligente. Obtén respuestas precisas al instante.
                </p>
              </div>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-600">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-green-500 mr-2"/>
                  Búsqueda contextual inteligente
                </li>
                <li class="flex items-center text-gray-600">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-green-500 mr-2"/>
                  Procesamiento de lenguaje natural
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div class="mb-6">
                <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ph:robot-bold" class="w-7 h-7 text-blue-600"/>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">
                  Automatización Inteligente
                </h3>
                <p class="text-gray-600">
                  Automatiza tareas repetitivas y procesos complejos con precisión y eficiencia.
                </p>
              </div>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-600">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-green-500 mr-2"/>
                  Flujos de trabajo automatizados
                </li>
                <li class="flex items-center text-gray-600">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-green-500 mr-2"/>
                  Reducción de errores humanos
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div class="mb-6">
                <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ph:chart-line-up-bold" class="w-7 h-7 text-blue-600"/>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">
                  Análisis Predictivo
                </h3>
                <p class="text-gray-600">
                  Anticipa tendencias y toma decisiones basadas en datos con modelos predictivos avanzados.
                </p>
              </div>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-600">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-green-500 mr-2"/>
                  Predicción de demanda
                </li>
                <li class="flex items-center text-gray-600">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-green-500 mr-2"/>
                  Optimización de inventario
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Final CTA Section -->
      <section class="py-16 bg-blue-600 text-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Comienza Tu Viaje Digital
          </h2>
          <p class="text-xl mb-8">
            Tu negocio merece crecer con tecnología a su medida
          </p>
          <button class="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Agenda una Demostración Gratuita
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const valueProps = [
    {
      icon: 'ph:arrows-left-right-bold',
      title: 'Procesos Familiares',
      description: 'Mantén tus procesos familiares, solo hazlos digitales sin cambiar tu forma de trabajo'
    },
    {
      icon: 'ph:chart-line-up-bold',
      title: 'Crecimiento Gradual',
      description: 'Comienza con lo esencial y expande según tus necesidades y ritmo de crecimiento'
    },
    {
      icon: 'ph:shapes-bold',
      title: 'Personalización Total',
      description: 'Soluciones adaptadas específicamente para cada tipo de negocio y sector'
    },
    {
      icon: 'ph:shield-check-bold',
      title: 'Datos Seguros',
      description: 'Tus datos empresariales siempre seguros y privados con encriptación avanzada'
    },
    {
      icon: 'ph:arrows-merge-bold',
      title: 'Transición Simple',
      description: 'Migración sencilla desde tus sistemas actuales en papel o Excel'
    },
    {
      icon: 'ph:currency-circle-dollar-bold',
      title: 'Planes Accesibles',
      description: 'Planes mensuales que se ajustan a tu presupuesto y necesidades'
    }
  ]
  
  const modules = [
    {
      title: 'Facturación Profesional y Cotizaciones',
      features: [
        'Genera facturas profesionales al instante',
        'Cotizaciones que impresionan',
        'Seguimiento de pagos pendientes',
        'Catálogo de productos digital',
        'Convertir cotizaciones en ventas',
        'Análisis de éxito en ventas'
      ]
    },
    {
      title: 'Control Total de Compras y Proveedores',
      features: [
        'Control completo de órdenes de compra',
        'Seguimiento de entregas parciales',
        'Comparación de precios entre proveedores',
        'Alertas de reorden automáticas',
        'Monitoreo de cambios de precios'
      ]
    },
    {
      title: 'Gestión Eficiente de Citas y Servicios',
      features: [
        'Evita dobles reservaciones',
        'Historial completo de servicios',
        'Gestión de horarios del personal',
        'Recordatorios automáticos',
        'Mejora en servicio al cliente'
      ]
    },
    {
      title: 'Control Financiero Simplificado',
      features: [
        'Conoce tu posición de caja exacta',
        'Registro simple de gastos',
        'Monitoreo de ventas diarias',
        'Conciliación facilitada',
        'Visión clara de tus finanzas'
      ]
    }
  ]
  
  const techFeatures = [
    {
      icon: 'ph:database-bold',
      title: 'Sistemas RAG Avanzados',
      description: 'Consulta y analiza documentos y datos de forma inteligente',
      features: ['Búsqueda contextual inteligente', 'Procesamiento de lenguaje natural']
    },
    {
      icon: 'ph:robot-bold',
      title: 'Automatización Inteligente',
      description: 'Automatiza tareas repetitivas y procesos complejos',
      features: ['Flujos de trabajo automatizados', 'Reducción de errores humanos']
    },
    {
      icon: 'ph:chart-line-up-bold',
      title: 'Análisis Predictivo',
      description: 'Anticipa tendencias y toma decisiones basadas en datos',
      features: ['Predicción de demanda', 'Optimización de inventario']
    }
  ]
  </script>