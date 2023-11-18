/*  Il programma dovrà chiedere all'utente:
    il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
    
    Queste sono le regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km);
    -va applicato uno sconto del 20% per i minorenni;
    -va applicato uno sconto del 40% per gli over 65 (fortunelli).
    L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
    
    // TOOLS
        -console.log
        -let/const
        -prompt
        -if/else if
        -.tofixed(2)
        ->/<
        -document.writeLn/document.getElementById
        -innerHTML
    //
*/

// funzione aggiunta per permettere il caricamento dell'immagine di background 
document.addEventListener('DOMContentLoaded', function() { 

    // chiediamo all'utente quanti km vuole percorrere e quanti anni ha.
    const kmViaggio = prompt ('Ciao! Quanti KM vuoi percorrere?');
    const etaUtente = prompt ('Inserisci qui la tua età per definire il costo del biglietto.');

    // chiediamo all'utente di inserire solamente valori numerici
    if (isNaN(kmViaggio) || isNaN(etaUtente)) {
        alert('ERRORE. Per favore, inserisci solo valori numerici.');
    } else {

        // calcoliamo il prezzo totale del viaggio
        const kmPrice = 0.21;
        let ticketPrice = 0.21 * kmViaggio;

        // calcoliamo gli sconti
        if (etaUtente < 18) { // sconto minorenni
            ticketPrice *= 0.8;    
        } else if (etaUtente > 65) { // sconto over 65
            ticketPrice *= 0.6;    
        }

        // approssimiamo il risultato a due cifre decimali
        ticketPrice = ticketPrice.toFixed(2);

        // stampiamo in pagina il prezzo finale del biglietto
        document.getElementById('ticket_price').innerHTML = `Il prezzo del biglietto è di € ${ticketPrice}`;
    }
});