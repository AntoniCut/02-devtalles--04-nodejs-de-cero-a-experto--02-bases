/*
    *  -------------------------------------------------------------------------------  *
    *  -----  10-app-heroes.js  --  /src/javascript-foundation/10-app-heroes.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


const { findHeroById, findHeroByName, findHeroByOwner } = require('../utils/hero.service.js');


console.clear();
console.log('------------------------------');
console.log('-----  10-app-heroes.js  -----');
console.log('------------------------------');


//  -----  Ejemplos con los 3 métodos  -----

/** @type {Hero|undefined} */
const hero2 = findHeroById(2);
console.log('\n\n', hero2);

/** @type {Hero|undefined} */
const heroSpiderman = findHeroByName('Spiderman');
console.log('\n\n', heroSpiderman);


/** @type {Hero[]} */
const heroesMarvel = findHeroByOwner('Marvel');
console.log('\n\nHeroes de Marvel:', heroesMarvel);

/** @type {Hero[]} */
const heroesDC = findHeroByOwner('DC');
console.log('\n\nHeroes de DC:', heroesDC);
