# 🛸 Rick and Morty · Multiverse Explorer

Explora personajes y episodios del multiverso en una aplicación Angular conectada a la [API GraphQL de Rick and Morty](https://rickandmortyapi.com/graphql).

<p>
  <img alt="Angular 16" src="https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.1-3178C6?logo=typescript&logoColor=white">
  <img alt="GraphQL" src="https://img.shields.io/badge/API-GraphQL-E10098?logo=graphql&logoColor=white">
  <img alt="Apollo Angular" src="https://img.shields.io/badge/Apollo_Angular-311C87?logo=apollographql&logoColor=white">
</p>

## ✨ Qué puedes hacer

- 🧬 Explorar el directorio de personajes, buscar por nombre, filtrar por estado y cargar más resultados al desplazarte.
- 🪪 Consultar una ficha lateral con imagen, especie, género, origen y ubicación de cada personaje.
- ⌨️ Abrir la búsqueda con `Ctrl + K` o `Cmd + K`; los resultados se actualizan mientras escribes.
- ⭐ Guardar favoritos en `localStorage` y consultarlos desde su panel lateral.
- 📺 Explorar episodios agrupados por temporada, con búsqueda por título o código.
- 🧭 Navegar entre personajes, favoritos, episodios e información; las vistas se cargan bajo demanda.
- 📱 Usar una interfaz adaptable a pantallas pequeñas.
- 🌐 Ejecutar opciones de renderizado del lado del servidor (SSR) y prerenderizado.

## 🧰 Tecnologías

| Tecnología                     | Uso                                      |
| ------------------------------ | ---------------------------------------- |
| 🅰️ Angular 16 y TypeScript     | Aplicación y componentes                 |
| 🚀 Apollo Angular y GraphQL    | Consultas a la API oficial               |
| 🔄 RxJS                        | Datos reactivos, búsqueda y filtros      |
| 🎨 HTML y CSS                  | Interfaz, diseño adaptable y animaciones |
| 💾 `localStorage`              | Persistencia de personajes favoritos     |
| 🌐 Express y Angular Universal | Servidor y renderizado SSR               |

## 📋 Requisitos

- Node.js compatible con Angular 16.
- npm.

## 🚀 Inicio rápido

```bash
npm install
npm start
```

Abre [http://localhost:4200](http://localhost:4200) para usar la aplicación.

## 🗺️ Rutas

| Ruta                         | Vista                    |
| ---------------------------- | ------------------------ |
| `/characters-list`           | Directorio de personajes |
| `/home`                      | Panel de favoritos       |
| `/episodes`                  | Archivo de episodios     |
| `/about`                     | Información del proyecto |
| Cualquier ruta no reconocida | Página no encontrada     |

La ruta raíz (`/`) redirige al directorio de personajes.

## ⚙️ Comandos disponibles

| Comando             | Descripción                                                    |
| ------------------- | -------------------------------------------------------------- |
| `npm start`         | Inicia el servidor de desarrollo de Angular.                   |
| `npm run build`     | Compila la aplicación para el navegador.                       |
| `npm run watch`     | Compila en modo desarrollo y observa cambios.                  |
| `npm test`          | Ejecuta las pruebas con Karma y Jasmine.                       |
| `npm run dev:ssr`   | Inicia el servidor de desarrollo SSR.                          |
| `npm run build:ssr` | Compila la aplicación de navegador y el servidor SSR.          |
| `npm run serve:ssr` | Sirve la compilación SSR; ejecuta primero `npm run build:ssr`. |
| `npm run prerender` | Prerenderiza las rutas configuradas.                           |

## 🏗️ Estructura del proyecto

```text
src/
├── app/
│   ├── components/pages/       # Personajes, episodios, favoritos, About y 404
│   ├── shared/                 # Componentes, servicios, interfaces y utilidades
│   ├── app-routing.module.ts   # Rutas y carga diferida
│   └── graphql.module.ts       # Configuración de Apollo
├── assets/imgs/                # Recursos gráficos
├── styles.css                  # Estilos y variables globales
├── main.server.ts              # Entrada de Angular para SSR
└── main.ts                     # Entrada del navegador
server.ts                       # Servidor Express para SSR
netlify.toml                    # Configuración de despliegue en Netlify
```

## 🎨 Diseño y herramientas

- 🧵 **Stitch** se utilizó para explorar el concepto visual “Rick and Morty Redesign” y consultar sus artefactos de diseño desde VS Code.
- 🤝 **GitHub Copilot en VS Code** apoyó la adaptación del diseño a Angular y la integración de vistas y controles con los datos reactivos.
- 🧩 Los estilos y componentes del diseño se adaptaron a las plantillas y hojas CSS del proyecto.
- 🛠️ Estas herramientas se usan durante el desarrollo; no son dependencias de ejecución y la aplicación no necesita servicios de IA para funcionar.

---

<p align="center">Hecho para explorar el multiverso, un episodio a la vez. 🌌</p>
