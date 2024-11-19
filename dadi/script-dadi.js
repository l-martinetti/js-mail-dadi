//DADI
const playerNumber = Math.ceil(Math.random() * 6);
const computerNumber = Math.ceil(Math.random() * 6);
let winnerMessage;

//Logic
if (playerNumber > computerNumber) {
    winnerMessage = "Hai vinto"
} else if (playerNumber < computerNumber) {
    winnerMessage = "Hai perso"
} else {
    winnerMessage = "Pareggio"
}
console.log(winnerMessage);