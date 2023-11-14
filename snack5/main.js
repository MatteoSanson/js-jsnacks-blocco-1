// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
'use strict';

console.log ('ciao');

const numUtente = +(prompt('Inserisci un numero'));

if (!isNaN(numUtente) && numUtente > 0) {
    console.log (numUtente);
    for (let i=0; i < numUtente; i++){
        const arrayUtente = [];
        for (let y= 0; y < 10; y++) {
            const numeroRandom = Math.floor(Math.random() * 100) + 1;
            arrayUtente.push(numeroRandom);
        }
        console.log(arrayUtente);
    }
} else {
    console.log('Inserisci un numero valido e maggiore di zero.');
    alert('Inserisci un numero valido e maggiore di zero.')
}
