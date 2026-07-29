/*
    *  ------------------------------------------------  *
    *  -----  heroes.js  --  /src/data/heroes.js  -----  *
    *  ------------------------------------------------  *
*/


/// <reference path="../types/types.d.js" />



/** @type {Hero[]} - Lista de héroes. */
const heroes = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Thor',
        owner: 'Marvel'
    },
    {
        id: 5,
        name: 'Wonder Woman',
        owner: 'DC'
    },
    {
        id: 6,
        name: 'Aquaman',
        owner: 'DC'
    },
    {
        id: 7,
        name: 'Green Lantern',
        owner: 'DC'
    }
];



module.exports = {
    heroes,
};
