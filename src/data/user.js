/*
    *  ----------------------------------------------  *
    *  -----  users.js  --  /src/data/users.js  -----  *
    *  ----------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


/** @type {User[]} - Array de objetos de usuario con propiedades `id` y `name`. */
const users = [
    {
        id: 1,
        name: 'Jhon Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];


module.exports = {
    users,
};
