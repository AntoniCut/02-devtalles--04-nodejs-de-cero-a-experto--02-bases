/*
    *  -------------------------------------------------------------------------------  *
    *  -----  09-app-logger.js  --  /src/javascript-foundation/09-app-logger.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


console.clear()
console.log('----------------------------');
console.log('-------  09-logger.js  -----');
console.log('----------------------------\n\n');


const { buildLogger } = require('../plugins');

/** - `logger` - instancia del logger personalizado con Winston. */
const logger = buildLogger('09-logger.js');

logger.log('Hola Mundo desde el logger personalizado con Winston!');

logger.error('Error desde el logger personalizado con Winston!');
