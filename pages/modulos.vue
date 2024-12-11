<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Banner -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div class="container mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Nuestras Soluciones
          </h1>
          <p class="text-xl text-white dark:text-white text-center">
            Herramientas poderosas diseñadas para impulsar tu negocio
          </p>
        </div>
      </div>

  
      <!-- Module Sections -->
      <div class="space-y-16">
        <!-- Billing Section -->
        <section id="facturacion" class="py-16 bg-white">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Facturación y Cotizaciones
              </h2>
              <p class="text-xl text-gray-600 mb-12">
                Sistema completo para gestionar tus ventas, desde la cotización hasta el cobro
              </p>
  
              <div class="space-y-16">
                <!-- Core Features -->
                <div>
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Características Principales
                  </h3>
                  <div class="grid gap-8">
                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📄</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Facturación Instantánea
                        </h4>
                        <p class="text-gray-600">
                          Genera facturas profesionales en segundos con plantillas personalizables y cumplimiento fiscal automático.
                        </p>
                      </div>
                    </div>
  
                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">💼</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Cotizaciones Profesionales
                        </h4>
                        <p class="text-gray-600">
                          Crea cotizaciones que impresionen a tus clientes y aumenten tus probabilidades de cierre.
                        </p>
                      </div>
                    </div>
  
                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📊</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Seguimiento de Pagos
                        </h4>
                        <p class="text-gray-600">
                          Mantén un control preciso de pagos pendientes y realizados con recordatorios automáticos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!-- Benefits -->
                <div class="bg-gray-50 rounded-2xl p-8">
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Beneficios
                  </h3>
                  <div class="grid md:grid-cols-2 gap-6">
                    <div v-for="benefit in billingBenefits" :key="benefit" 
                         class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>{{ benefit }}</span>
                    </div>
                  </div>
                </div>

                <UButton block to="/cotizaciones/nueva" color="primary" icon="i-heroicons-plus">
                  Crear Cotización
                </UButton>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Purchasing Section -->
        <section id="compras">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Control de Compras y Proveedores
              </h2>
              <p class="text-xl text-gray-600 mb-12">
                Gestión integral de tu cadena de suministro y relaciones con proveedores
              </p>

              <div class="space-y-16">
                <!-- Core Features -->
                <div>
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Características Principales
                  </h3>
                  <div class="grid gap-8">
                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📋</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Órdenes de Compra Digitales
                        </h4>
                        <p class="text-gray-600">
                          Control completo de órdenes de compra con seguimiento en tiempo real.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">🔔</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Sistema de Alertas
                        </h4>
                        <p class="text-gray-600">
                          Alertas automáticas de reorden y seguimiento de cambios de precios.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📊</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Análisis de Proveedores
                        </h4>
                        <p class="text-gray-600">
                          Comparación de precios y desempeño entre proveedores para mejores decisiones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Benefits -->
                <div class="bg-gray-50 rounded-2xl p-8">
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Beneficios
                  </h3>
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Control completo de órdenes de compra</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Seguimiento de entregas parciales</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Comparación de precios entre proveedores</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Alertas de reorden automáticas</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Monitoreo de cambios de precios</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Appointments Section -->
        <section id="citas" class="py-16 bg-white">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gestión de Citas y Servicios
              </h2>
              <p class="text-xl text-gray-600 mb-12">
                Sistema integral para la gestión de citas, personal y servicios
              </p>

              <div class="space-y-16">
                <!-- Core Features -->
                <div>
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Características Principales
                  </h3>
                  <div class="grid gap-8">
                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📅</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Calendario Inteligente
                        </h4>
                        <p class="text-gray-600">
                          Sistema de reservas que previene dobles agendamientos y optimiza horarios.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">👥</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Gestión de Personal
                        </h4>
                        <p class="text-gray-600">
                          Control eficiente de horarios y asignación de servicios al personal.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📱</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Recordatorios Automáticos
                        </h4>
                        <p class="text-gray-600">
                          Notificaciones automáticas para clientes y personal sobre próximas citas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Benefits -->
                <div class="bg-gray-50 rounded-2xl p-8">
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Beneficios
                  </h3>
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Evita dobles reservaciones</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Historial completo de servicios</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Gestión de horarios del personal</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Recordatorios automáticos</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Mejora en servicio al cliente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Cash Control Section -->
        <section id="caja" class="py-16">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Control de Caja y Flujo de Efectivo
              </h2>
              <p class="text-xl text-gray-600 mb-12">
                Gestión financiera simplificada para un control total de tu negocio
              </p>

              <div class="space-y-16">
                <!-- Core Features -->
                <div>
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Características Principales
                  </h3>
                  <div class="grid gap-8">
                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">💰</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Control de Efectivo
                        </h4>
                        <p class="text-gray-600">
                          Conoce tu posición de caja exacta en tiempo real.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📊</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Monitoreo de Ventas
                        </h4>
                        <p class="text-gray-600">
                          Seguimiento detallado de ventas diarias y tendencias.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📝</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Gestión de Gastos
                        </h4>
                        <p class="text-gray-600">
                          Registro y categorización simple de todos los gastos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Benefits -->
                <div class="bg-gray-50 rounded-2xl p-8">
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Beneficios
                  </h3>
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Conoce tu posición de caja exacta</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Registro simple de gastos</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Monitoreo de ventas diarias</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Conciliación facilitada</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Visión clara de tus finanzas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- AI Section -->
        <section id="ia" class="py-16 bg-white">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Inteligencia Artificial y Automatización
              </h2>
              <p class="text-xl text-gray-600 mb-12">
                Potencia tu negocio con tecnología inteligente y automatización avanzada
              </p>

              <div class="space-y-16">
                <!-- Core Features -->
                <div>
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Características Principales
                  </h3>
                  <div class="grid gap-8">
                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">🤖</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Sistemas RAG Avanzados
                        </h4>
                        <p class="text-gray-600">
                          Consulta y analiza documentos y datos de forma inteligente.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">⚡</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Automatización Inteligente
                        </h4>
                        <p class="text-gray-600">
                          Automatiza tareas repetitivas y procesos complejos.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-6">
                      <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span class="text-blue-600 text-2xl">📈</span>
                      </div>
                      <div>
                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                          Análisis Predictivo
                        </h4>
                        <p class="text-gray-600">
                          Anticipa tendencias y toma decisiones basadas en datos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Benefits -->
                <div class="bg-gray-50 rounded-2xl p-8">
                  <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                    Beneficios
                  </h3>
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Búsqueda contextual inteligente</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Procesamiento de lenguaje natural</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Flujos de trabajo automatizados</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Predicción de demanda</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-green-500 mt-1">✓</span>
                      <span>Optimización de inventario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  
      <!-- Final CTA -->
      <div class="bg-blue-600 py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Agenda una demostración personalizada y descubre el poder de nuestras soluciones
          </p>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Agenda una Demo
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const sections = [
    { id: 'facturacion', title: 'Facturación y Cotizaciones' },
    { id: 'compras', title: 'Gestión de Compras y Proveedores' },
    { id: 'citas', title: 'Citas y Servicios' },
    { id: 'caja', title: 'Control de Caja y Flujo de Efectivo' },
    { id: 'ia', title: 'Inteligencia Artificial y Automatización' }
  ]
  
  const billingBenefits = [
    'Reducción del tiempo de facturación en un 75%',
    'Mejora en la precisión de las cotizaciones',
    'Seguimiento automático de pagos pendientes',
    'Histórico completo de transacciones',
    'Reportes personalizados de ventas',
    'Integración con sistemas contables'
  ]
  </script>