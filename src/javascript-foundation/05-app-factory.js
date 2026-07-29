/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  05-app-factory.js  --  /src/javascript-foundation/05-app-factory.js  -----  *
    *  ---------------------------------------------------------------------------------  *
*/



/// <reference path="../types/types.d.js" />


//  -----  Importaciones de factories  -----
const { buildPerson: buildPersonWithoutDependencies } = require('../utils/factory-introduccion.js');
const { buildPerson: buildPersonWithDependencies } = require('../utils/factory-necesidad.js');
const { buildMakePerson } = require('../utils/factory-adaptor.js');

//  -----  Importaciones de plugins (patrón adaptador)  -----
const { getUUID, getAge } = require('../plugins');

//  -----  Importaciones de datos  -----
const { obj1, obj2 } = require('../data/persons.js');


console.clear();
console.log('-------------------------------');
console.log('-----  05-app-factory.js  -----');
console.log('-------------------------------');


/*
    *  ---------------------------------------  *
    *  -----  Sin Dependencias Externas  -----
    *  ---------------------------------------  *
*/


console.log('\n\n-----  Sin Dependencias Externas  -----');

/**  ----- persona 1aplicamos el patron fabrica  -----  */
const makePerson1 = buildPersonWithoutDependencies(obj1);

/**  ----- persona 2 aplicamos el patron fabrica  -----  */
const makePerson2 = buildPersonWithoutDependencies(obj2);

console.table({ makePerson1 });
console.table({ makePerson2 });



/*
    *  ---------------------------------------  *
    *  -----  Con Dependencias Externas  -----
    *  ---------------------------------------  *
*/


console.log('\n\n-----  Con Dependencias Externas  -----');

/**  ----- persona 3 aplicamos el patron fabrica  -----  */
const makePerson3 = buildPersonWithDependencies(obj1);

/**  ----- persona 4 aplicamos el patron fabrica  -----  */
const makePerson4 = buildPersonWithDependencies(obj2);

console.table({ makePerson3 });
console.table({ makePerson4 });


/*
    *  ----------------------------------------------------------  *
    *  -----  Con Dependencias Externas y Patron Adaptador  -----
    *  ---------------------------------------------------------  *
*/

console.log('\n\n-----  Con Dependencias Externas y Patron Adaptador  -----');

/** ----- La factory recibe las dependencias y devuelve la función creadora  ----- */
const makePerson = buildMakePerson({ getUUID, getAge });


/** ----- Usamos esa función para crear personas  ----- */
const makePerson5 = makePerson(obj1);

/** ----- Usamos esa función para crear personas  ----- */
const makePerson6 = makePerson(obj2);

console.table({ makePerson5 });
console.table({ makePerson6 });
console.log('\n\n');
