// Mail

// Variables
const allowedEmails = ["prova1@mail.com", "prova2@mail.com", "prova3@mail.com"];
let message;
const askEmail = prompt("inserisci la tua email");

//Logic
if (allowedEmails.includes(askEmail) ) {
    message = "Email confermata con successo";
} else {
    message = "Email sconosciuta";
}
console.log(message);
