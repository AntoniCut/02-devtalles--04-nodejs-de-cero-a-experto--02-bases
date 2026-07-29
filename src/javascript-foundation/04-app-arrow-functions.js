/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  04-app-arrow-functions.js  --  /src/javascript-foundation/04-app-arrow-functions.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/


const { getUserById } = require('../utils/arrow-functions');


console.clear()
console.log('---------------------------------------');
console.log('-----  04-app-arrow-functions.js  -----')
console.log('---------------------------------------\n\n');


/** @type {number} - Identificador del usuario a buscar. */
const id = 2;


getUserById(id, (error, user) => {

    //  -----  Manejo del Error  -----
    if (error)
        throw new Error(error);

    //  -----  Usuario Encontrado  -----
    console.table({ user });
    console.log('\n\n');

});
