/*
    *  ---------------------------------------------------  *
    *  -----  factory.js  --  /src/utils/factory.js  -----  *
    *  ---------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />

const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');




/**
 * -----------------------------------------------
 * -----  `buildPerson({ name, birthday })`  -----
 * -----------------------------------------------
 * Factory con dependencias externas (`uuid`, `get-age`).
 * @param {Person} person - Objeto de la persona.
 * @returns {PersonWithMeta} - Objeto de la persona con las propiedades id, name, birthday y age.
 */

const buildPerson = ({ name, birthday }) => {

    return {
        id: uuidv4(),
        name,
        birthday,
        age: getAge(birthday)
    }

};


module.exports = {
    buildPerson,
};
