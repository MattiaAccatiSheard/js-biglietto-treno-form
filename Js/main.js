let element = document.getElementById("hey");
element.style.color= "red"
element.addEventListener('click', function () {
    alert("Il bottone è stato cliccato!");
});

let buttonCalculateEl = document.getElementById("ticket-generator");
let inputAgeEl = document.getElementById("age");
let inputKmEl = document.getElementById("km");


buttonCalculateEl.addEventListener('click', function(){
    console.log('l\'età dell\'utente è:', inputAgeEl.value);
    console.log('l\'utente percorrerà', inputKmEl.value + 'km');
    
    //chiedo età
    let age = parseInt(prompt('quanti anni hai?'))
    //chitedo lunghezza del viaggio
    let kilometri = parseFloat(prompt('quanti kilometri viaggerai?'))

    //prova console
    console.log('L\'utente ha' + ' ' + age + ' ' + 'anni e viaggerà per' + ' ' + kilometri + 'km');


    //calcolo del prezzo
    let price = parseFloat(0.21 * kilometri).toFixed(2);
    console.log('il prezzo del biglietto è:' + ' ' + price + '$');

    //applico gli sconti
    if (age <= 17) {
        price = (price - (price / 100 * 20)).toFixed(2);
        console.log(', ma grazie allo sconto del 20% il minorenne pagherà:' + price + '$');
    } else if (age >= 65) {
        price = (price - (price / 100 * 40)).toFixed(2);
        console.log(', ma grazie allo sconto del 40% l\'anziano pagherà:' + price + '$');
    }
    else (18 <= age <= 65); {
        price = price;
    }
    document.getElementById("ticket-result").innerHTML=price;
});




