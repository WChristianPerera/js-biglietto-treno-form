// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
/*MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.*/







let km = document.querySelector('#km').value;

let age = document.querySelector('#age');

const priceForKm = 0.21;
const discountChild = 20;
const discountAdult = 40;

let basePrice = (priceForKm * km);
let finalPriceU = (basePrice - (basePrice * discountChild / 100));        
let finalPriceO = (basePrice - (basePrice * discountAdult / 100));     


const eleBtnG = document.querySelector('#generate');
eleBtnG.addEventListener('click', function () {
    if (age == 'Minorenne') {
        document.getElementById("finalquote").innerHTML = finalPriceU.toFixed(2);
        
    } else (age == 'Over 65'); {
        document.getElementById("finalquote").innerHTML = finalPriceO.toFixed(2) + '€';
    }
    if (age == 'Maggiorenne') {
        document.getElementById("finalquote").innerHTML = basePrice.toFixed(2);
    }
})
    












