/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  06-app-promises.js  --  /src/javascript-foundation/06-app-promises.js  -----  *
    *  -----------------------------------------------------------------------------------  *
*/


console.clear()
console.log('------------------------------------');
console.log('-------  06-promises.js  ----------')
console.log('-----------------------------------\n\n');


//  -----  Importación de funciones -----
const { 
    getPokemonByIdWithCallback, 
    getPokemonByIdWithPromises 
} = require('../utils/get-pokemon-by-id');


//  -----  funcion con callback -----
getPokemonByIdWithCallback(1, ( pokemon ) => {
 
    console.log('\nCallback Pokemon name: ', { pokemon });
    
});


//  -----  funcion con promesas -----
getPokemonByIdWithPromises(2)
    .then( pokemon => console.log('\nPromise Pokemon name: ', { pokemon }) )
    .catch( err => console.error('err => ', err) )
    .finally( () => console.log('Finally: Operación de obtención de Pokémon finalizada con Promesas.') );