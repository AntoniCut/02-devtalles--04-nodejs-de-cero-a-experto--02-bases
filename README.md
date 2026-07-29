# 02 - Bases de NodeJS

> Módulo **02-bases** del curso **NodeJS de Cero a Experto** — _devtalles.antonydev.tech_
>
> Fundamentos de JavaScript y NodeJS: template literals, destructuring, callbacks, arrow functions, patrón fábrica, promesas, async/await, Fetch API con patrón adaptador y logging con Winston.

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Lecciones](#lecciones)
- [Patrones y conceptos aplicados](#patrones-y-conceptos-aplicados)
- [Dependencias](#dependencias)
- [Recursos externos](#recursos-externos)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Descripción

Este proyecto corresponde a la **segunda sección** del curso _NodeJS de Cero a Experto_ y tiene como objetivo asentar las bases del lenguaje JavaScript en el entorno de NodeJS.

A través de una colección de ejemplos prácticos y progresivos (de `01` a `09`) se revisan los pilares sobre los que se apoya cualquier aplicación NodeJS moderna:

1. **Template literals** y literales de cadena.
2. **Destructuring** de objetos y arreglos (incluyendo `process.env`).
3. **Callbacks** y manejo de errores.
4. **Arrow functions** y diferencias con funciones tradicionales.
5. **Patrón Fábrica** con inyección de dependencias.
6. **Promesas** como evolución de los callbacks.
7. **Async / Await** para código asíncrono legible.
8. **Fetch API** y el **patrón adaptador** para clientes HTTP.
9. **Logger** personalizado construido sobre **Winston**.

Cada lección es un archivo independiente ejecutable mediante un script dedicado de `pnpm`, lo que permite ejecutar y comparar enfoques de forma aislada.

---

## Tecnologías

- **NodeJS** (target `ES2022`)
- **JavaScript** (CommonJS) con tipado JSDoc + `checkJs`
- **pnpm** como gestor de paquetes
- **nodemon** para recarga en desarrollo
- **axios**, **uuid**, **get-age**, **winston**

---

## Requisitos previos

- [NodeJS](https://nodejs.org/) `>= 18` (recomendado `>= 20` para `fetch` global nativo).
- [pnpm](https://pnpm.io/) instalado globalmente:

  ```bash
  npm install -g pnpm
  ```

- Conexión a internet para los ejemplos que consumen la [PokéAPI](https://pokeapi.co/).

---

## Instalación

Clona el repositorio e instala las dependencias desde la carpeta `02-bases`:

```bash
pnpm install
```

> El archivo `pnpm-lock.yaml` garantiza versiones reproducibles.

---

## Uso

### Ejecutar la aplicación principal

```bash
pnpm start
```

Arranca `src/app.js` con `nodemon` y muestra el ejemplo de _email template_.

### Ejecutar una lección concreta

Cada lección tiene su propio script (ver [Scripts disponibles](#scripts-disponibles)). Por ejemplo, la lección de async/await:

```bash
pnpm run dev:async-await
```

### Modo desarrollo

```bash
pnpm run dev
```

---

## Scripts disponibles

| Script                        | Comando                                                                  | Descripción                                            |
| ----------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| `start`                       | `nodemon ./src/app.js`                                                   | Arranca la app principal (`app.js`).                   |
| `dev:template`                | `nodemon ./src/javascript-foundation/01-app-template.js`                 | Lección 01 — Template literals.                        |
| `dev:desestructuring`         | `nodemon ./src/javascript-foundation/02-app-destructuring.js`            | Lección 02 — Destructuring de objetos y arreglos.      |
| `dev:callbacks`               | `nodemon ./src/javascript-foundation/03-app-callbacks.js`                | Lección 03 — Callbacks y manejo de errores.            |
| `dev:arrow-functions`         | `nodemon ./src/javascript-foundation/04-app-arrow-functions.js`          | Lección 04 — Arrow functions.                          |
| `dev:apply-factory`           | `nodemon ./src/javascript-foundation/05-apply-factory.js`                | Lección 05 — Patrón Fábrica con dependencias.          |
| `dev:promises`                | `nodemon ./src/javascript-foundation/06-promises.js`                     | Lección 06 — Promesas (callback vs promesa).           |
| `dev:async-await`             | `nodemon ./src/javascript-foundation/07-async-await.js`                  | Lección 07 — Async / Await.                            |
| `dev:fetch-api`               | `nodemon ./src/javascript-foundation/08-fetch-api-patron-adaptador.js`   | Lección 08 — Fetch API + patrón adaptador.             |
| `dev:logger`                  | `nodemon ./src/javascript-foundation/09-logger.js`                       | Lección 09 — Logger personalizado con Winston.         |
| `test`                        | _no implementado_                                                        | Reservado para pruebas.                                |

---

## Estructura del proyecto

```
02-bases/
├── src/
│   ├── app.js                          # Punto de entrada de la aplicación
│   ├── javascript-foundation/          # Lecciones del 01 al 09
│   │   ├── 01-app-template.js
│   │   ├── 02-app-destructuring.js
│   │   ├── 03-app-callbacks.js
│   │   ├── 04-app-arrow-functions.js
│   │   ├── 05-apply-factory.js
│   │   ├── 06-promises.js
│   │   ├── 07-async-await.js
│   │   ├── 08-fetch-api-patron-adaptador.js
│   │   └── 09-logger.js
│   ├── plugins/                        # Adaptadores / plugins reutilizables
│   │   ├── index.js                    # Barrel de exportación de plugins
│   │   ├── get-age-plugin.js           # Adaptador del paquete `get-age`
│   │   ├── get-id-plugin.js            # Generador de UUID con `uuid`
│   │   ├── http-client-plugin.js       # Cliente HTTP (patrón adaptador con axios)
│   │   └── logger.plugin.js            # Logger basado en Winston
│   ├── types/
│   │   └── types.d.js                  # Definiciones de tipos JSDoc (User, Person, HttpClient...)
│   └── utils/                          # Utilidades y lógica de negocio
│       ├── factory.js                  # buildMakePerson (patrón fábrica)
│       ├── get-pokemon-by-id.js        # 4 variantes: callback, promise, async/await, fetch API
│       ├── users-callbacks.js          # getUserById con estilo callbacks
│       └── users-arrow-functions.js    # getUserById con arrow functions
├── global.d.ts                         # Tipos DOM extendidos para compatibilidad
├── jsconfig.json                       # Configuración de TypeScript para JS (checkJs)
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## Lecciones

### 01 — Template literals (`01-app-template.js`)
Define una plantilla HTML de correo con interpolación de variables (`{{name}}`, `{{confirmationLink}}`) y la exporta para su uso desde `app.js`.

### 02 — Destructuring (`02-app-destructuring.js`)
Desestructuración de variables de entorno desde `process.env` (con valores por defecto mediante `??`) y de arreglos posicionales.

### 03 — Callbacks (`03-app-callbacks.js`)
Búsqueda de usuario por `id` utilizando el patrón _error-first callback_ y propagación de errores.

### 04 — Arrow functions (`04-app-arrow-functions.js`)
Misma funcionalidad que la lección 03 reimplementada con arrow functions para comparar sintaxis y comportamiento.

### 05 — Apply & Factory (`05-apply-factory.js`)
Aplicación del **patrón fábrica** con inyección de dependencias: `buildMakePerson({ getUUID, getAge })` construye personas a partir de plugins externos.

### 06 — Promesas (`06-promises.js`)
Comparación en paralelo de `getPokemonByIdWithCallback` y `getPokemonByIdWithPromises` contra la PokéAPI.

### 07 — Async / Await (`07-async-await.js`)
Versión con `async/await` y bloque `try/catch` para obtener un Pokémon de forma legible.

### 08 — Fetch API + patrón adaptador (`08-fetch-api-patron-adaptador.js`)
Uso de un cliente HTTP intercambiable (`httpClient`) que envuelve `axios`, demostrando el **patrón adaptador**.

### 09 — Logger (`09-logger.js`)
Construcción de un logger personalizado a partir de **Winston** mediante el `buildLogger(service)` del plugin correspondiente.

---

## Patrones y conceptos aplicados

| Patrón / Concepto        | Dónde se aplica                                           |
| ------------------------ | --------------------------------------------------------- |
| Patrón Fábrica           | `src/utils/factory.js` → `buildMakePerson`                |
| Inyección de dependencias | `05-apply-factory.js` (pasando `getUUID` y `getAge`)     |
| Patrón Adaptador         | `src/plugins/http-client-plugin.js`, `get-age-plugin.js`  |
| Error-first callback     | `src/utils/users-callbacks.js`                            |
| Promesas / Async-Await   | `src/utils/get-pokemon-by-id.js` (4 variantes)            |
| Barrel / index de plugins | `src/plugins/index.js`                                   |
| Tipado JSDoc + `checkJs` | `src/types/types.d.js`, `jsconfig.json`, `global.d.ts`    |

---

## Dependencias

### Producción
- [`axios`](https://www.npmjs.com/package/axios) — Cliente HTTP usado en el patrón adaptador.
- [`get-age`](https://www.npmjs.com/package/get-age) — Cálculo de edad a partir de una fecha.
- [`uuid`](https://www.npmjs.com/package/uuid) — Generación de identificadores únicos (UUID v4).
- [`winston`](https://www.npmjs.com/package/winston) — Librería de logging.

### Desarrollo
- [`nodemon`](https://www.npmjs.com/package/nodemon) — Recarga automática en desarrollo.
- [`@types/node`](https://www.npmjs.com/package/@types/node) — Tipados de NodeJS para `checkJs`.

---

## Recursos externos

- [PokéAPI](https://pokeapi.co/) — API pública usada en las lecciones 06, 07 y 08.
- [Documentación de NodeJS](https://nodejs.org/docs/latest/api/)
- [Winston — Logging](https://github.com/winstonjs/winston)

---

## Autor

**AntonyDev** — _devtalles.antonydev.tech_

---

## Licencia

ISC © AntonyDev
