/*
    *  -------------------------------------------------------------------------------  *
    *  -----  users-arrow-functions.js  --  /src/utils/users-arrow-functions.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


//  -----  Importación de datos -----
const { users } = require('../data/user');



/**
 * -------------------------------
 * -----  `getUserById(id)`  -----
 * -------------------------------
 * - Función que recibe un `id` y devuelve el objeto de usuario con ese `id`.
 * @param {number} id - Identificador del usuario a buscar.
 * @param {(error: string|null, user?: User) => void} callback - Función de callback que maneja el resultado.
 */

const getUserById = (id, callback) => {

    /** - `Usuario encontrado` o `undefined` si no se encuentra. */
    const user = users.find((user) => user.id === id);

    (user)
        ? callback(null, user)
        : callback(`User not found with ID ${id}`);

}


//  -----  Exportaciones -----
module.exports = {
    users,
    getUserById,
};

