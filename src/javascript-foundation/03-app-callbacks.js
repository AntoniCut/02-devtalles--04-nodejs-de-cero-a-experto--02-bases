/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  03-app-callbacks.js  --  /src/javascript-foundation/03-app-callbacks.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


const { getUserById } = require('../utils/callbacks');


console.clear()
console.log('---------------------------------');
console.log('-----  03-app-callbacks.js  -----')
console.log('---------------------------------\n\n');


/** @type {number} - Identificador del usuario a buscar. */
const id = 2;


getUserById(id, function (error, user) {

    //  -----  Manejo del Error  -----
    if (error) 
        throw new Error(error);
    
    //  -----  Usuario Encontrado  -----
    console.table({ user });
    console.log('\n\n');

});
