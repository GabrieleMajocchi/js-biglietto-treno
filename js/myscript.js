
let KmNumber;
let Age;
let TicketPrice;

function AskData(){

    KmNumber = parseInt (prompt("Inserisci il numero di km che percorrerai per arrivare a destinazione:", "10"));
    Age = parseInt (prompt("Inserisci la tua età:", "25"));

    if (Age < 18){
        TicketPrice = [(100-20)/100]*(KmNumber * 0.21)
    } else if (Age > 65){
        TicketPrice = [(100-60)/100]*(KmNumber * 0.21)
    } else {
        TicketPrice = KmNumber * 0.21
    }
    TicketPrice = TicketPrice.toFixed(2);
    document.getElementById("suggpass").innerText ="Il costo del tuo biglietto per percorrere "+ KmNumber +" è di "+ TicketPrice;

}