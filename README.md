# 🛸 Rick and Morty - Angular + GraphQL

Aplicación Angular para explorar personajes y episodios de Rick and Morty a través de la API GraphQL oficial. Incluye búsqueda y filtros reactivos, paneles laterales para detalles y favoritos, además de configuración para renderizado del lado del servidor (SSR) y prerenderizado. 🚀

## ✨ Funcionalidades

- 🔎 Directorio de personajes con búsqueda por nombre, filtros por estado y carga de páginas adicionales al desplazarse.
- 🧩 Tarjetas reutilizables con imagen, estado, especie, género y origen.
- ⌨️ Paleta de búsqueda con atajo `Ctrl + K` / `Cmd + K` y resultados conectados a GraphQL.
- 🪟 Drawer de detalles de personaje con información de origen y ubicación.
- ⭐ Favoritos persistidos en `localStorage`, con una vista drawer accesible desde la navegación.
- 📺 Archivo de episodios agrupado por temporada, con búsqueda por título/código y filtros reactivos.
- 📱 Interfaz minimalista adaptable a pantallas móviles.
- 🧭 Navegación con módulos cargados de forma diferida y página para rutas no encontradas.
- ⚡ Configuración de SSR y prerenderizado para la aplicación.

## 🛠️ Tecnologías

- 🅰️ Angular 16 y TypeScript
- ◈ Apollo Angular y GraphQL para consultar los personajes y episodios.
- 🔄 RxJS para estado observable, búsqueda reactiva y filtros.
- 🎨 HTML5 y CSS3 nativo para componentes, animaciones y diseño responsive.
- 💾 `localStorage` para persistir favoritos en el navegador.
- 🌐 Express y Angular Universal para SSR

## 🤖 Diseño y herramientas de IA

- 🧵 **Stitch** se utilizó para generar el concepto visual minimalista “Rick and Morty Redesign” y consultar sus artefactos de diseño mediante el MCP de Stitch disponible en VS Code.
- 🤝 **GitHub Copilot en VS Code** se utilizó como asistente de desarrollo para adaptar el diseño al proyecto Angular, refactorizar las vistas e integrar los controles con los observables y consultas existentes.
- 🧩 Los artefactos HTML/CSS de diseño se mapearon a templates y hojas de estilo locales de Angular; los tokens visuales compartidos se incorporaron a los estilos globales.
- 🛠️ Las herramientas de IA se usaron durante el diseño y el desarrollo. No son dependencias de ejecución y la aplicación no necesita servicios de IA para funcionar.

## 📋 Requisitos

- Node.js y npm compatibles con Angular 16.

## 🚀 Instalación y desarrollo

```bash
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200`.

## ⚙️ Comandos

| Comando             | Descripción                                           |
| ------------------- | ----------------------------------------------------- |
| `npm start`         | Inicia el servidor de desarrollo.                     |
| `npm run build`     | Compila la aplicación para el navegador.              |
| `npm test`          | Ejecuta las pruebas unitarias con Karma y Jasmine.    |
| `npm run build:ssr` | Compila la aplicación de navegador y el servidor SSR. |
| `npm run serve:ssr` | Inicia el servidor SSR compilado.                     |
| `npm run prerender` | Genera HTML estático para la ruta configurada.        |

## 🗺️ Estado y próximos pasos

- [x] 🏗️ Configuración inicial de Angular y estructura modular.
- [x] 🔗 Integración con la API GraphQL mediante Apollo.
- [x] 🔎 Búsqueda y filtros de personajes con resultados conectados a GraphQL.
- [x] ⌨️ Paleta de búsqueda accesible con `Ctrl + K` / `Cmd + K`.
- [x] 🪟 Drawer de detalles de personaje y drawer de favoritos.
- [x] ⭐ Favoritos reactivos persistidos localmente.
- [x] 📺 Archivo de episodios con filtros por temporada y búsqueda.
- [x] 🎨 Rediseño minimalista responsive con CSS nativo y animaciones.
- [x] 🌐 Configuración de compilación SSR y prerenderizado.
- [x] ✅ Build de producción con `npm run build`.
- [x] 🧪 Pruebas enfocadas para la vista de favoritos y navegación.
- [ ] 🧪 Ampliar la cobertura de pruebas para consultas, paginación y estados de error.
- [ ] ⚠️ Revisar y unificar el manejo de errores de GraphQL y `localStorage`.

## 📂 Estructura

- `src/app/components/pages/`: vistas de personajes, episodios, favoritos, información y rutas no encontradas.
- `src/app/components/pages/characters/`: tarjetas, listado, ruta de detalle y drawer de detalles.
- `src/app/components/pages/home/`: drawer de personajes favoritos.
- `src/app/components/pages/episodes/`: archivo y filtros de episodios.
- `src/app/shared/`: componentes compartidos, servicios, interfaces y utilidades.
- `src/app/graphql.module.ts`: configuración del cliente Apollo.
- `src/styles.css`: tokens de diseño y estilos globales.
- `server.ts` y `src/main.server.ts`: entrada del servidor SSR.
