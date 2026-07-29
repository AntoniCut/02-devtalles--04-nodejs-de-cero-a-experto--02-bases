/*
    *  ---------------------------------------------------  *
    *  -----  factory.js  --  /src/utils/factory.js  -----  *
    *  ---------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />



/**
 * ---------------------------------
 * -----  `getAge(birthday)`  -----
 * ---------------------------------
 * Obtiene la edad de una persona a partir de su fecha de nacimiento.
 * @param {string} birthday - Fecha de nacimiento de la persona.
 * @returns {number} - Edad de la persona.
 */

const getAge = (birthday) => {

    /** ----- obtenemos la fecha actual ----- */
    const today = new Date();
    
    /** ----- obtenemos la fecha de nacimiento ----- */
    const birthDate = new Date(birthday);

    // ----- si la fecha de nacimiento es inválida, lanzamos un error -----
    if (Number.isNaN(birthDate.getTime()))
        throw new Error('Birthday is invalid');
    
    /** ----- obtenemos la edad ----- */
    let age = today.getFullYear() - birthDate.getFullYear();

    /** ----- obtenemos la diferencia de meses ----- */
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;

};



/**
 * -----------------------------------
 * -----  `buildPerson(person)`  -----
 * -----------------------------------
 * Factory sin dependencias externas.
 * @param {Person} person - Objeto con name y birthday.
 * @returns {PersonWithMeta} - Persona con id, name, birthday y age.
 */

const buildPerson = ( person ) => {

    const { name, birthday } = person;

    return {
        id: new Date().getTime(),
        name,
        birthday,
        age: getAge(birthday)
    }

};



module.exports = {
    buildPerson,
}
