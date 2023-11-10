'use strict';

const parolaPrima = prompt ('Inserisci la prima parola');
console.log ('La prima parola è: ', parolaPrima);

const parolaSeconda = prompt ('inserisci la seconda parola');
console.log('La seconda parola è: ', parolaSeconda);

if (parolaPrima.length < parolaSeconda.length) {
    console.log('La parola più corta è:', parolaPrima);
    console.log('La parola più lunga è:', parolaSeconda);
} else if (parolaPrima.length > parolaSeconda.length) {
    console.log('La parola più corta è:', parolaSeconda);
    console.log('La parola più lunga è:', parolaPrima);
} else {
    console.log('Le parole hanno la stessa lunghezza.');
}