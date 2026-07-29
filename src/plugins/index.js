/*
    *  -------------------------------------------------  *
    *  -----  index.js  --  /src/plugins/index.js  -----  *
    *  -------------------------------------------------  *
*/


const { getUUID } = require('../plugins/get-id-plugin');
const { getAge } = require('../plugins/get-age-plugin');
const { httpClient } = require('../plugins/http-client-plugin');
const buildLogger = require('../plugins/logger.plugin');


module.exports = {
    getUUID,
    getAge,
    httpClient,
    buildLogger,
}
