/*
    *  ---------------------------------------------------------------------------  *
    *  -----  http-client-plugin.js  --  /src/plugins/http-client-plugin.js  -----  *
    *  ---------------------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


/** - Importación de axios. */
const axios = require('axios');



/**
 * --------------------------------
 * -----  `httpClientPlugin`  -----
 * --------------------------------
 * - Implementación del patrón adaptador para el cliente HTTP utilizando fetch API.
 * @type {HttpClient}
 */

const httpClientPlugin = {

    get: async(url) => {
    
        /*
            -----  usando fetch API  -----

            const resp = await fetch(url);
            return await resp.json();
        
        */
        
        
        //  -----  usando axios  -----
        const { data } = await axios.get(url);
        
        return data;
    },

    post: async(url, body) => { },

    put: async(url, body) => { },

    delete: async(url) => { }

};


module.exports = {
    httpClient: httpClientPlugin,
}
