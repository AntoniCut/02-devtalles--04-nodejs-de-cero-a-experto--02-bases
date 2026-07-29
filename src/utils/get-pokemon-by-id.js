/*
    *  -----------------------------------------------------------------------  *
    *  -----  get-pokemon-by-id.js  --  /src/utils/get-pokemon-by-id.js  -----  *
    *  -----------------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


const { httpClient } = require('../plugins');


/**
 * --------------------------------------------
 * -----  `getPokemonById(id, callback)`  -----
 * --------------------------------------------
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando un callback.
 * @param {number} id - Identificador del pokemon a buscar.
 * @param {(pokemon: { name: string }) => void} callback - Función callback que se ejecuta con el Pokémon obtenido.
 * @returns {void}
 */

const getPokemonByIdWithCallback = (id, callback) => {

    /** - URL de la API de Pokémon. */
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //  -----  Fetch API  -----
    fetch(url)

        .then(resp => {

            resp
                .json()
                .then(pokemon => callback(pokemon.name))
        })

        .catch(err => console.warn(err));

}



/**
 * ----------------------------------------------
 * -----  `getPokemonByIdWithPromises(id)`  -----
 * ----------------------------------------------
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando Promesas.
 * @async
 * @param {number} id - Identificador del pokemon a buscar.
 * @returns {Promise<string>} - Promesa que se resuelve con el nombre del Pokémon obtenido.
 */

const getPokemonByIdWithPromises = (id) => {

    /** - URL de la API de Pokémon. */
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //  -----  Promesa  -----
    return new Promise((resolve, reject) => {

        //  -----  Fetch API  -----
        fetch(url)
            .then(resp => resp.json())
            .then(pokemon => resolve(pokemon.name))
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });

}



/**
 * ------------------------------------------------
 * -----  `getPokemonByIdWithAsyncAwait(id)`  -----
 * ------------------------------------------------
 * 
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando Async/Await.
 * 
 * @param {number} id - Identificador del pokemon a buscar.
 * @returns {Promise<string>} - Promesa que se resuelve con el nombre del Pokémon obtenido.
 * 
 */

const getPokemonByIdWithAsyncAwait = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {

        /** - obtención de la respuesta de la API. */
        const resp = await fetch(url);

        /** - obtención del Pokémon de la respuesta. */
        const pokemon = await resp.json();

        //  -----  Retorno del nombre del Pokémon. -----
        return pokemon.name;

    }

    catch (
        /** @type {unknown} - Error que se produce al obtener el Pokémon. */
        error
    ) {

        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }

        throw error;
    }

}



/**
 * ----------------------------------------------
 * -----  `getPokemonByIdWithFetchAPI(id)`  -----
 * ----------------------------------------------
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando Async/Await.
 * - Utiliza el plugin httpClient para obtener la respuesta de la API.
 * - patron adaptador para obtener el nombre del Pokémon.
 * @async
 * @param {number} id - Identificador del pokemon a buscar.
 * @returns {Promise<string>} - Promesa que se resuelve con el nombre del Pokémon obtenido.
 */

const getPokemonByIdWithFetchAPI = async ( id ) => {

    /** - URL de la API de Pokémon. */
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    /** @type {Pokemon} - obtención del Pokémon de la API. */
    const pokemon = await httpClient.get(url);
    
    //  -----  Retorno del nombre del Pokémon. -----
    return pokemon.name;
   
}



//  -----  Exportaciones -----
module.exports = {
    getPokemonByIdWithCallback,
    getPokemonByIdWithPromises,
    getPokemonByIdWithAsyncAwait,
    getPokemonByIdWithFetchAPI,
}
