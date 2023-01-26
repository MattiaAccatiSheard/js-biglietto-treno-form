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
});

