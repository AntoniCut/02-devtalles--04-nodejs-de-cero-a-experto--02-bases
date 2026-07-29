/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  07-app-async-await.js  --  /src/javascript-foundation/07-app-async-await.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/


console.clear()
console.log('------------------------------------');
console.log('-------  07-async-await.js  ----------')
console.log('-----------------------------------\n\n');


const { getPokemonByIdWithAsyncAwait } = require('../utils/get-pokemon-by-id');


//  -----  funcion con async/await -----
getPokemonByIdWithAsyncAwait(4)
    .then(pokemonName => console.log('pokemonName => ', pokemonName))
    .catch(err =>console.error('err => ', err))
    .finally(() => console.log('Finally: Operación de obtención de Pokémon finalizada con Async/Await.'));
    

