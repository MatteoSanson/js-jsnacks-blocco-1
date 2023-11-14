// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
'use strict';

console.log('sto funzionando');

const listaNum = [];
let somma = 0;

while (true) {
    const numUtente = prompt('Inserisci un numero');
    console.log (numUtente);

    if (numUtente === null || numUtente === '') {
        break;
    }
    const numero = +(numUtente);

    if (!isNaN(numero)) {
        listaNum.push(numero);
        somma += numero;

        if (somma >= 50) {
            console.log('La somma è uguale o supera 50.');
            break;
        }
    } else {
        console.log('Inserisci un numero valido.');
        alert('Inserisci un numero valido.');
    }
}

console.log('Numeri inseriti:', listaNum);
console.log('Somma:', somma);