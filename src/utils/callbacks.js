/*
    *  -------------------------------------------------------------------  *
    *  -----  users-callbacks.js  --  /src/utils/users-callbacks.js  -----  *
    *  -------------------------------------------------------------------  *
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

function getUserById(id, callback) {

    
    /** - `Usuario encontrado` o `undefined` si no se encuentra. */
    const user = users.find(function (user) {
        return (user.id === id);
    });

    if(!user) 
        return callback(`User not found with ID ${id}`);
    
    return callback(null, user);

}


//  -----  Exportaciones -----
module.exports = {
    users,
    getUserById,
};

