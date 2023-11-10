'use strict';

const parolaPrima = prompt ('Inserisci la prima parola');
console.log (parolaPrima);

const parolaSeconda = prompt ('inserisci la seconda parola');
console.log(parolaSeconda);

if (parolaPrima.length < parolaSeconda.length) {
    console.log('La parola più corta è:', parolaPrima);
    console.log('La parola più lunga è:', parolaSeconda);
} else if (parolaPrima.length > parolaSeconda.length) {
    console.log('La parola più corta è:', parolaSeconda);
    console.log('La parola più lunga è:', parolaPrima);
} else {
    console.log('Le parole hanno la stessa lunghezza.');
}