const name = "John";
const age = 27;

// console.log(`Cześć, mam na imie ${name} i mam ${age} lat`);

//const emptyParagraph = document.querySelector('.main-section__description--js');
//emptyParagraph.innerHTML = `Cześć, mam na imie ${name} i mam ${age} lat`;

// function greet(age, name) {
//     return `Cześć, mam na imie ${name} i mam ${age} lat`;
// }

//Notacja fat arrow function
const greet = (age, name) => {

    const person = {
        age: age,
        name: name,
    };

    console.log(`Cześć, mam na imie ${person.name} i mam ${person.age} lat`);
}

greet(age, name);

function createContent(selector, content) {
    const emptySelector = document.querySelector(selector);
    emptySelector.innerHTML = content;
}

//createContent('.main-section__description--js', 'Hello World!');

if('Java' != 'JavaScript') {
    console.log('Java to nie JS');
}

const button = document.querySelector('.action--js');

const myClick = () => {
    // const emptyParagraph = document.querySelector('.main-section__description--js');
    // emptyParagraph.innerHTML = `Cześć, mam na imie ${name} i mam ${age} lat`;
}

//Burgermenu

button.addEventListener('click', myClick);

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});

//Import / Export test

import person1 from './person.js';

//console.log(person1);

const person = {
    name: 'Jan',
    nazwisko: 'Kowalski',
    wiek: 32
}

localStorage.setItem('person', JSON.stringify(person));

//console.log(JSON.parse(localStorage.getItem('person')));

const entry = localStorage.getItem('entry');
let result = '';

if(entry) {
    result = entry;
}

const entryInput = document.querySelector('.input--js');
const entryButton = document.querySelector('.button--js');

entryInput.value = result;

entryButton.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
})