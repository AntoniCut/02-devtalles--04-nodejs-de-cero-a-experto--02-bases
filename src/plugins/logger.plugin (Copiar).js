/*
    *  ----------------------------------------------------------------  *
    *  -----  logger.plugin.js  --  /src/plugins/logger.plugin.js  -----  *
    *  -----------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


/** - Importación de Winston. */
const winston = require('winston');


/**
 * ------------------------------------
 * -----  `buildLogger(service)`  -----
 * ------------------------------------
 * - Crea un logger personalizado con Winston.
 * @param {string} service - Nombre del servicio que aparecerá en los metadatos del log.
 * @returns {Logger} - Logger personalizado con Winston.
 */

module.exports = function buildLogger(service) {

    /** - logger para registrar los logs. */
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service },
        transports: [
            new winston.transports.Console(),
        ],
    });

    return {
        
        log: (message) => {
            logger.info(message);
        },
    };

};
