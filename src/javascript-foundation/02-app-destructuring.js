/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  02-app-destructuring.js  --  /src/javascript-foundation/02-app-destructuring.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/


console.clear();
console.log('-------------------------------------');
console.log('-----  02-app-destructuring.js  -----')
console.log('-------------------------------------\n\n');


console.log('process => \n\n', process);
console.log('variablesEntorno => \n\n', process.env);


//  -----  Desestructuring Objeto  -----
const { PORT, DB_HOST, DB_USER, DB_PASSWORD, SHELL } = process.env;

console.warn('\nDestructuring Variables de Entorno => \n\n');

console.table({ 

    'PORT': PORT ?? 3000,
    'DB_HOST': DB_HOST ?? 'localhost',
    'DB_USER': DB_USER ?? 'root',
    'DB_PASSWORD': DB_PASSWORD ?? 'rootpassword',
    'SHELL': SHELL ?? '/bin/bash' 
});


/** @type {string[]} - Array de personajes de DC Comics */
const character = [ 'Flash', 'Superman', 'Batman'];

//  -----  Desestructuring Arreglo  -----
const [ , , batman ] = character;


console.warn('\nDestructuring Arreglo => \n\n');
console.log('batman => ', batman);
