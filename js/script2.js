// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
// Dichiariamo chi ha vinto. 

let oddOrEven = prompt("pari o dispari?");
let userNumber = parseInt(prompt("scegli un numero da 1 a 5"), 10);
console.log(userNumber);

// generiamo la funzione che ci restituisca poi un numero casuale da 1 a 5 per il computer 

function getRandomNumber (numMin, numMax){
    const randomNumber = Math.floor(Math.random() * (numMax - numMin +1) + numMin);
    return randomNumber;
}

let computerNumber = getRandomNumber (1, 5);
console.log(computerNumber);

const sum = computerNumber + userNumber;
console.log(sum);