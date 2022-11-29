//ESERCIZIO 1
//Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma



let string = "";
let stringReverse = "";


// cerchiamo di vedere una parola come una array; partiamo in questo caso dalla ultima posizione e risaliamo fino alla posizione zero
// un palindromo restituirà a video i medesimi valori sia visto dall'inizio che dalla fine


// qui il ciclo for è al contrario perché stiamo partendo dall'ultima posizione 

function isPalindrome(string){

    let word = string.length;

    for (let i=string.length - 1; i>=0; i--){
        stringReverse = stringReverse + string[i];
    }
    if (stringReverse === string){
        alert(word("è palindroma"));
    } 
    return word;   

}
let userWord = prompt("scrivi una parola");
console.log(userWord);





