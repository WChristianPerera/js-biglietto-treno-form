// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 



//chiedere quanti chilometri percorrere
// chiedere l'età 
// calcolare i km in euro 
// applicare lo sconto in base all'età
// fixare il risultato 






let km = parseInt(prompt('Quanti chilometri vuoi percorrere ?'));

let age = parseInt(prompt('Quanti anni hai ?'));

const priceForKm = 0.21;
const discountChild = 20;
const discountAdult = 40

let basePrice = (priceForKm * km);
let Underprice = (basePrice - (basePrice * discountChild / 100));      
let Overprice = (basePrice - (basePrice * discountAdult / 100));      

if (age >= 18 && age <= 65) {
    document.getElementById("euros").innerHTML = basePrice.toFixed(2);
} else if (age < 18) {
    document.getElementById("euros").innerHTML = Underprice.toFixed(2);
} else (age > 65); {
    document.getElementById("euros").innerHTML = Overprice.toFixed(2);
}



if (isNaN(km) || isNaN(age)) {
    document.getElementById("euros").innerHTML = alert("Attenzione! Valori non validi! (Ricaricare la pagina)");
}








