/*
    *  -----------------------------------------------------------------  *
    *  -----  get-id-plugin.js  --  /src/plugins/get-id-plugin.js  -----  *
    *  -----------------------------------------------------------------  *
*/


/** -----  Importamos el plugin `uuid` - patron adaptador  ----- */
const { v4: uuid4} = require('uuid');


/**
 * -------------------------
 * -----  `getUUID()`  -----
 * -------------------------
 * - adaptador para el plugin `uuid`
 * - Obtiene un ID único.
 * @returns {string} - ID único.
 */

const getUUID = () => uuid4();


module.exports = {
    getUUID,
}
