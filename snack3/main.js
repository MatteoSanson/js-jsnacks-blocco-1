// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
'use strict';

let somma = 0;

for (let i = 1; i <= 10; i++) {
  let numeroUtente = Number(prompt(`${i} - Inserisci un numero:`));
  if (!isNaN(numeroUtente)) {
    somma += numeroUtente;
    console.log (`Il ${i}° numero che hai inserito e ${numeroUtente[i - 1]}`);
    console.log (`la somma al momento è ${somma}`);
  } else {
    i = i - 1;
    alert("Non hai inserito un numero.");
    console.log (numeroUtente);
  }
}

console.log("La somma dei numeri che hai inserito è: " + somma);