/*
    *  -------------------------------------------------------------------  *
    *  -----  factory-adaptor.js  --  /src/utils/factory-adaptor.js  -----  *
    *  ------------------------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />


/**
 * ----------------------------------------------------
 * -----  `buildMakePerson({ getUUID, getAge })`  -----
 * ----------------------------------------------------
 * - `Función fábrica` que construye un creador de personas
 * @param {{
     * getUUID: () => string|number,
     * getAge: (birthday: string) => number
 * }} deps - Dependencias necesarias para construir la persona.
 * @returns {(person: Person) => PersonWithMeta} - Función que crea una persona.
 */

const buildMakePerson = ({ getUUID, getAge }) => {

    return ({ name, birthday }) => {

        return {
            id: getUUID(),
            name,
            birthday,
            age: getAge(birthday)
        }
    }

}


module.exports = {
    buildMakePerson,
}
