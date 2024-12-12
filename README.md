# EdgeTech - Plataforma de Transformación Digital para PyMEs

## Descripción General

EdgeTech es una plataforma integral de transformación digital diseñada específicamente para Pequeñas y Medianas Empresas (PyMEs) en Colombia. Nuestra misión es cerrar la brecha digital proporcionando soluciones accesibles, escalables y fáciles de usar que ayuden a las empresas tradicionales a transicionar de procesos basados en papel a operaciones digitales.

## Módulos

### 🧾 Facturación Profesional y Cotizaciones
- Genera facturas profesionales al instante
- Crea y gestiona cotizaciones
- Seguimiento de pagos pendientes
- Catálogo digital de productos
- Conversión de cotizaciones a ventas
- Análisis de éxito en ventas

### 📦 Control de Compras y Proveedores
- Control completo de órdenes de compra
- Seguimiento de entregas parciales
- Comparación de precios entre proveedores
- Alertas automáticas de reorden
- Monitoreo de cambios de precios

### 📅 Gestión de Citas y Servicios
- Evita dobles reservaciones
- Historial completo de servicios
- Gestión de horarios del personal
- Recordatorios automáticos
- Mejora en servicio al cliente

### 💰 Control Financiero
- Conoce tu posición de caja en tiempo real
- Registro simple de gastos
- Monitoreo de ventas diarias
- Conciliación facilitada
- Visión clara de tus finanzas

### 🤖 Funcionalidades con IA
- Sistemas RAG (Retrieval-Augmented Generation) avanzados
- Escaneo y procesamiento de documentos
- Automatización inteligente
- Análisis predictivo
- Optimización de inventario

## Stack Tecnológico

### Backend
- **PocketBase**: Solución principal de backend para desarrollo rápido
  - Base de datos en tiempo real con autenticación integrada
  - APIs REST y Realtime autogeneradas
  - Panel de administración incluido
  - Despliegue simple con un solo ejecutable
  - Escalable y fácil de mantener
  - Permite exportar colecciones

### Frontend
- **Nuxt.js**: Framework moderno de Vue.js
- **Nuxt UI**: Biblioteca de componentes para UI consistente
- **Tailwind CSS**: Framework CSS basado en utilidades

## Comenzando

### Requisitos Previos
- Node.js (Se recomienda la última versión LTS)
- Gestor de paquetes pnpm
- Servidor PocketBase

### Instalación

1. Clonar el repositorio:
```bash
git clone [https://github.com/CamiloCaceres/EdgeTech-cliente]
cd digipyme
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en el directorio raíz con:
```env
POCKET_BASE_URL=http://tu-url-pocketbase:8090
```

4. Iniciar el servidor de desarrollo:
```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

### Compilación para Producción

```bash
pnpm build
```

## Estructura del Proyecto

```
├── components/          # Componentes Vue reutilizables
├── composables/        # Funciones composables
├── pages/             # Páginas de la aplicación
├── utils/             # Funciones de utilidad
└── server/            # Configuración del lado del servidor
```

## Características en Desarrollo

- [ ] Arquitectura multi-tenant
- [ ] Procesamiento OCR avanzado
- [ ] Análisis de documentos con IA
- [ ] Tablero de inteligencia empresarial
- [ ] Integración con sistemas contables locales

## Contribuir

¡Agradecemos las contribuciones a DigiPyME! Por favor, lee nuestras guías de contribución antes de enviar pull requests.

## Licencia

[Tipo de Licencia] - ver LICENSE.md para más detalles

## Soporte

Para soporte y consultas:
- Email: [camiloac97@gmail.com]
- Sitio web: [url-sitio-web]

## Acerca de

DigiPyME se desarrolla con la misión de democratizar la transformación digital para las PyMEs latinoamericanas. Nuestra plataforma cierra la brecha entre las prácticas empresariales tradicionales y las soluciones digitales modernas, haciendo que la tecnología sea accesible y práctica para empresas de todos los tamaños.