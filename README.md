# Marvel App

Marvel App es una aplicación creada para obtener información sobre diferentes personajes de Marvel. La aplicación contiene 3 vistas principales: una vista de listado de personajes y una vista de detalle del personaje y otra de donde encontrarás tus personajes favoritos. El diseño de la aplicación es responsive y sigue los diseños definidos en Figma.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
  - [El Desafío](#el-desafío)
  - [Captura de Pantalla](#captura-de-pantalla)
  - [Enlaces](#enlaces)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
- [Autor](#autor)
- [Guia de Instalación](#Guía-de-Instalación)
  - [Requisitos Previos](#Requisitos-Previos)
  - [Instalación](#Instalación)
  - [Ejecución del Proyecto](#Ejecución-del-Proyecto)
- [Decisiones de Arquitectura](#Decisiones-de-Arquitectura)

## Descripción General

### El Desafío

Los usuarios deberían ser capaces de:

- Ver una lista de 50 personajes o los resultados de la búsqueda de personajes introducidos en la barra de búsqueda.
- Hacer clic en el icono de favoritos para ver los personajes favoritos almacenados.
- Ver información detallada sobre un personaje y los cómics en los que aparece.

### Captura de Pantalla

![Marvel App Screenshot](./screenshots/desktop.png)

### Enlaces

- URL de la Solución: [Code](https://github.com/eduardoguette/marvelapp)
- URL del Sitio en Vivo: [Preview](https://marvelapp-eduardoguette.vercel.app/)

## Proceso de Desarrollo

### Construido con

- Flujo de trabajo Mobile-first
- [React](https://reactjs.org/) - Biblioteca de JavaScript
- [React Router DOM](https://reactrouter.com/) - Para enrutamiento
- [Context API](https://reactjs.org/docs/context.html) - Para gestión del estado
- [TypeScript](https://www.typescriptlang.org/) - Para tipado estático
- [Axios](https://axios-http.com/) - Para solicitudes HTTP
- [Framer Motion](https://www.framer.com/motion/) - Para animaciones
- [Vite](https://vitejs.dev/) - Para empaquetado
- [@tanstack/react-query](https://react-query.tanstack.com/) - Para obtención y caché de datos
- [Vitest](https://vitest.dev/) - Para pruebas
- [Happy DOM](https://github.com/capricorn86/happy-dom) - Para pruebas del DOM
- [ESLint](https://eslint.org/) - Para linting
- [PostCSS](https://postcss.org/) y [Autoprefixer](https://github.com/postcss/autoprefixer) - Para procesamiento de CSS

### Lo que aprendí

El mayor reto fue la implementación de las pruebas mediante una librería, ya que normalmente no suelo realizarlas. Sin embargo, gracias a mi experiencia previa en desarrollo, pude superar esta dificultad. Una vez que leí la documentación de Vitest y @testing-library/react, recordé conceptos que había aprendido antes y pude aplicar estos conocimientos para escribir pruebas efectivas. Esto no solo me permitió asegurarme de que mi código funcionaba correctamente, sino que también mejoró mi comprensión sobre la importancia de las pruebas en el desarrollo de software.

## Guía de Instalación

### Requisitos Previos

Asegúrate de tener instalado Node.js (versión 14 o superior) y npm (versión 6 o superior).

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/eduardoguette/marvelapp.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd marvelapp
   ```

3. Instala las dependencias:

   ```bash
   pnpm install
   ```

### Ejecución del Proyecto

#### Para ejecutar el proyecto en modo desarrollo:

```bash
    pnpm run dev
```

Esto iniciará la aplicación en http://localhost:3000.

#### Build para Producción

```bash
    pnpm run build
```

Los archivos estáticos se generarán en la carpeta dist.

### Decisiones de Arquitectura

- React y Context API: Se eligieron estas tecnologías para manejar el estado global de la aplicación, proporcionando una manera eficiente de compartir datos entre componentes sin necesidad de pasar props de forma manual.
- TypeScript: Se decidió usar TypeScript para mejorar la robustez y mantenibilidad del código, proporcionando tipado estático y ayudando a evitar errores comunes durante el desarrollo.
- React Query: Esta librería fue elegida para manejar la obtención y caché de datos de la API de Marvel, optimizando las solicitudes HTTP y mejorando el rendimiento de la aplicación.
- Framer Motion: Se utilizó para implementar animaciones fluidas y atractivas en la interfaz de usuario.
- Vite: Optamos por Vite como nuestro empaquetador debido a su rapidez en el arranque del servidor de desarrollo y su eficiente proceso de construcción.
- Pruebas: Se implementaron pruebas con Vitest y @testing-library/react para asegurar la calidad del código y el correcto funcionamiento de la aplicación.

### Autor

Eduardo Guette
