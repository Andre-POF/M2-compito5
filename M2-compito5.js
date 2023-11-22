/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
 */
/*
let together;

function crazySum(num1, num2) {

if (num1 === num2) {
    together = (num1 + num2)*3;
    let output = console.log("the 2 numbers are the same. Sum*3 = " + together );
    return output;
} else {
    together = (num1 + num2);
    let output = console.log ("the sum of two different numbers! Sum = " + together);
    return output;
}
}

let rdm = Math.round(Math.random()*100);
let rdm2 = Math.round(Math.random()*100);

crazySum(rdm,rdm2);


 */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/*
function boundary(myInt) {
    if ( (myInt<=100 && myInt >= 20) || (myInt === 400) ) {
        console.log("I'm true");
        return true;
    } else {
        let warning = " this number is neither between 20 and 100 or is the number 400! ";
        console.log(warning);
    }
}

boundary(Math.round(Math.random()*100));

*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


/*
function reverseString(niceString) {
    let string1 = "";
    for (let i = niceString.length-1; i > -1; i-- ){
        string1 += niceString[i];
    }
    console.log(string1);
    return string1;
}

reverseString("EPICODE");
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
let finalSentence ="";
let upperCasing;

function upperFirst(beautifulString){
    let words = beautifulString.split(" ");
    for ( let i = 0; i < words.length; i++){
        upperCasing = words[i][0].toUpperCase();
        for ( let j = 1; j < words[i].length; j++){
            upperCasing+=words[i][j];
        }
            finalSentence += upperCasing + " ";
            console.log(finalSentence);
        }
        return finalSentence;
    }

upperFirst("i love you 3 thousand");

*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
let finalArr = [];
let rmdNum; 

let giveMeRandom = (n) => {
    for( let i = 0; i < n; i++){
    rmdNum = Math.round(Math.random()*9);
    if(rmdNum === 0) {rmdNum = 1;}
    finalArr.push(rmdNum);
    }
    console.log(finalArr);
    return finalArr;
}

giveMeRandom(23);

*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
