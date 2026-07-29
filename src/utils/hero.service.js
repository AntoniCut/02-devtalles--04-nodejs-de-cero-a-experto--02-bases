/*
    *  -------------------------------------------------------------  *
    *  -----  hero.service.js  --  /src/utils/hero.service.js  -----  *
    *  -------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


const { heroes } = require('../data/heroes.js');


/**
 * ----------------------------------------
 * -----  `findHeroById(id)`  -----
 * ----------------------------------------
 * - Encontrar un héroe por su id.
 * @param {number} id - Identificador del héroe a buscar.
 * @returns {Hero|undefined} - Héroe encontrado o `undefined` si no existe.
 */

const findHeroById = (id) => heroes.find((hero) => hero.id === id);


/**
 * --------------------------------------------
 * -----  `findHeroByName(name)`  -----
 * --------------------------------------------
 * - Encontrar un héroe por su nombre.
 * @param {string} name - Nombre del héroe a buscar.
 * @returns {Hero|undefined} - Héroe encontrado o `undefined` si no existe.
 */

const findHeroByName = (name) => heroes.find((hero) => hero.name === name);


/**
 * ----------------------------------------------
 * -----  `findHeroByOwner(owner)`  -----
 * ----------------------------------------------
 * - Encontrar héroes por su owner.
 * @param {string} owner - Propietario o universo del héroe.
 * @returns {Hero[]} - Lista de héroes del owner indicado.
 */

const findHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);



module.exports = {
    findHeroById,
    findHeroByName,
    findHeroByOwner,
};
