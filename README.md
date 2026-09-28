# 🛸 Rick and Morty - Angular + GraphQL

Aplicación Angular para consultar personajes y episodios de Rick and Morty a través de la API GraphQL oficial. El proyecto incluye renderizado del lado del servidor (SSR) y prerenderizado. 🚀

## ✨ Funcionalidades

- 🔎 Listado de personajes con carga de páginas adicionales al desplazarse.
- 🧩 Tarjetas reutilizables con imagen e información básica de cada personaje.
- ⭐ Gestión de personajes favoritos mediante almacenamiento local.
- 📺 Vista de episodios.
- 🧭 Navegación con módulos cargados de forma diferida y página para rutas no encontradas.
- ⚡ Configuración de SSR y prerenderizado para la ruta principal.

La ruta de detalle de personaje está creada, pero su componente todavía no muestra información. La pantalla genérica de personajes también conserva contenido de ejemplo y no forma parte del flujo principal. 🚧

## 🛠️ Tecnologías

- 🅰️ Angular 16 y TypeScript
- ◈ Apollo Angular y GraphQL
- 🔄 RxJS
- 🌐 Express y Angular Universal para SSR
- 🧪 Karma y Jasmine para pruebas

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
- [x] 🔎 Consultas de personajes y episodios.
- [x] ⭐ Listado paginado de personajes y favoritos persistidos localmente.
- [x] 🧩 Componentes reutilizables para las tarjetas de personajes.
- [x] 🌐 Configuración de compilación SSR y prerenderizado.
- [x] ✅ Verificación de `npm run build:ssr` y `npm run prerender`.
- [ ] 📄 Implementar y probar el contenido de la vista de detalle de personaje.
- [ ] 🧹 Completar o retirar la pantalla de personajes que actualmente muestra contenido de ejemplo.
- [ ] 🧪 Ampliar las pruebas para cubrir consultas, paginación, favoritos y estados de error/vacío.
- [ ] 📱 Validar la interfaz responsive en distintos tamaños de pantalla.
- [ ] ⚠️ Revisar estados de carga y errores de la API en las vistas.

Hay archivos de pruebas unitarias en el proyecto, pero eso no implica que las funcionalidades estén cubiertas de forma suficiente. El estado de ejecución de `npm test` no está documentado todavía.

## 📂 Estructura

- `src/app/components/pages/`: vistas de personajes, episodios, favoritos, información y rutas no encontradas.
- `src/app/shared/`: componentes compartidos, servicios, interfaces y utilidades.
- `src/app/graphql.module.ts`: configuración del cliente Apollo.
- `server.ts` y `src/main.server.ts`: entrada del servidor SSR.
