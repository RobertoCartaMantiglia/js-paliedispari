//ESERCIZIO 1
//Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma






function isPalindrome (str){
    //calcoliamo la lunghezza della parola
    const wordLength = string.length;

    for (let i=0; i < wordLength / 2; i++){

        if(string[i] !== string[wordLength - 1 - i]){
            alert("non è palindromo");
        } else {
            alert("è palindromo");
        }
    }
    return wordLength;
}

let userWord = prompt("scrivi una parola");




