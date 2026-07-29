/*
    *  ----------------------------------------------------------------  *
    *  -----  logger.plugin.js  --  /src/plugins/logger.plugin.js  -----  *
    *  -----------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


/** - Importación de Winston. */
const winston = require('winston');

//  -----  objetos de Winston.format  -----
const { combine, timestamp, json } = winston.format;

/**  - `loggerFormat` - formato de los logs. */
const loggerFormat = combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    json(),
);
    


/** 
 * ----------------------
 * -----  `logger`  -----
 * ----------------------
 * - logger para registrar los logs. 
 */

const logger = winston.createLogger({
    level: 'info', 
    format: loggerFormat,
    //defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console(),
    ],
});



/**
 * ------------------------------------
 * -----  `buildLogger(service)`  -----
 * ------------------------------------
 * - Crea un logger personalizado con Winston.
 * @param {string} service - Nombre del servicio que aparecerá en los metadatos del log.
 * @returns {Logger} - Logger personalizado con Winston.
 */

module.exports = function buildLogger(service) {
   
    return {
        
        log: (message) => {
            logger.log('info', { 
                message, 
                service,
                timestamp: new Date().toISOString(),
            });
        },

        error: (message) => {
            logger.error({ 
                message, 
                service,
                timestamp: new Date().toISOString(),
            });
        },
       
    };

};
