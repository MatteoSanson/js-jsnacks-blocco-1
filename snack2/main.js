'use strict';

const parolaPrima = prompt ('Inserisci la prima parola');
console.log (parolaPrima);

const parolaSeconda = prompt ('inserisci la seconda parla');
console.log(parolaSeconda);

if (parolaPrima.length > parolaSeconda.length) {
    console.log('La parola più lunga è:', parolaPrima);
  } else if (parolaPrima.length < parolaSeconda.length) {
    console.log('La parola più lunga è:', parolaSeconda);
  } else {
    console.log('Le parole hanno la stessa lunghezza.');
  }