/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  08-app-fetch-api.js  --  /src/javascript-foundation/08-app-fetch-api.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


console.clear()
console.log('----------------------------------');
console.log('-----  08-app-fetch-api.js  -----')
console.log('---------------------------------\n\n');


//  -----  Importación de funciones -----
const { getPokemonByIdWithFetchAPI  } = require('../utils/get-pokemon-by-id');


//  -----  funcion con fetchAPI - patron adaptador  -----
getPokemonByIdWithFetchAPI(20)
    .then( pokemonName => {
        console.log('pokemonName => ', pokemonName);
    })
    .catch( err => console.warn(err) );

