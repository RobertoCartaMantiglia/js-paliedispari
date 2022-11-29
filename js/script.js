//ESERCIZIO 1
//Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma


// chiediamo all'utente una parola 
let userWord = prompt("scrivi una parola");

        //definiamo la funzione
function isPalindrome(stringa){
        
    let wordLength = stringa.length;  //definisco la lunghezza della variabile = alla lunghezza della stringa
    let palindrom = true;    //definisco una funzione che mi darà il risultato di ciò che sto cercando, parto dal presupposto che tutte le parole siano palindrome così da poter poi invertire la risposa booleana

    for (let i=0; i<wordLength /2; i++){          //faccio un ciclo for per scorrere la lunghezza della parola
        
        if(stringa[i] != stringa [stringa.length - 1 -i]) {    //se i valori che compongono la stringa son diversi se "letti" in verso opposto allora palindrom= false
            palindrom = false;
        }
    }     
    return palindrom;   

}
const risultato = isPalindrome (userWord);
console.log(risultato);







