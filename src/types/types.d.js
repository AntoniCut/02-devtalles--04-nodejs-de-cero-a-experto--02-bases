/*
    *  ---------------------------------------------------  *
    *  -----  types.d.js  --  /src/types/types.d.js  -----  *
    *  ---------------------------------------------------  *
*/



/**
 * --------------------
 * -----  `User`  -----
 * --------------------
 * - Definimos un tipo de dato `User` que representa un objeto de usuario.
 * @typedef {Object} User
 * @property {number|string} id - Unique identifier for the user.
 * @property {string} name - Name of the user.
 */



/**
 * ----------------------
 * -----  `Person`  -----
 * ----------------------
 * - Objeto con propiedades `name` y `birthday`.
 * @typedef {Object} Person
 * @property {string} name - El nombre de la persona.
 * @property {string} birthday - La fecha de nacimiento de la persona.
 */



/**
 * ------------------------------
 * -----  `PersonWithMeta`  -----
 * ------------------------------
 * - Tipo de dato que extiende `Person` con propiedades adicionales `id` y `age`.
 * @typedef {Object} PersonWithMeta
 * @property {number|string} id
 * @property {string} name
 * @property {string} birthday
 * @property {number} age
 */


/**
 * --------------------------
 * -----  `HttpClient`  -----
 * --------------------------
 * - Definición del tipo de dato para el cliente HTTP.
 * @typedef {Object} HttpClient
 * @property {(url: string) => Promise<any>} get - Realiza una solicitud GET a la URL especificada.
 * @property {(url: string, body: any) => Promise<any>} post - Realiza una solicitud POST a la URL especificada con el cuerpo proporcionado.
 * @property {(url: string, body: any) => Promise<any>} put - Realiza una solicitud PUT a la URL especificada con el cuerpo proporcionado.
 * @property {(url: string) => Promise<any>} delete - Realiza una solicitud DELETE a la URL especificada.
 */


/**
 * ------------------------
 * -----  `Pokemon`  -----
 * ------------------------
 * - Respuesta mínima de la PokéAPI usada en este proyecto.
 * @typedef {Object} Pokemon
 * @property {string} name - Nombre del Pokémon.
 */


/**
 * ------------------------
 * -----  `Logger`  -----
 * ------------------------
 * - Logger personalizado basado en Winston.
 * @typedef {Object} Logger
 * @property {(message: string) => void} log - Registra un mensaje informativo.
 * @property {(message: string) => void} error - Registra un mensaje de error.
 */
    