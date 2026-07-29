/*
    *  -------------------------------------------------------------------  *
    *  -----  get-age-plugin.js  --  /src/plugins/get-age-plugin.js  -----  *
    *  -------------------------------------------------------------------  *
*/


/** -----  Importamos el plugin `get-age` - patron adaptador  ----- */
const getAgePlugin = require('get-age');


/**
 * --------------------------------
 * -----  `getAge(birthday)`  -----
 * --------------------------------
 * - adaptador para el plugin `get-age`
 * - Obtiene la edad de una persona a partir de su fecha de nacimiento.
 * @param {string} birthday - Fecha de nacimiento de la persona.
 * @returns {number} - Edad de la persona.
 */

const getAge = (birthday) => {

    if (!birthday) 
        throw new Error('Birthday is required');
    
    return getAgePlugin(birthday);

}


module.exports = {
    getAge,
}
