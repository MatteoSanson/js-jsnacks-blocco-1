// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
'use strict';

let somma = 0;

for (let i = 0; i < 10; i++) {
  let numeroUtente = Number(prompt("Inserisci un numero:"));
  if (!isNaN(numeroUtente)) {
    somma += numeroUtente;
    console.log (numeroUtente);
  } else {
    alert("Non hai inserito un numero.");
  }
}

console.log("La somma dei numeri che hai inserito è: " + somma);