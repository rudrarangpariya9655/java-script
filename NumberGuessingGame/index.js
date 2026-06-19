const input = document.getElementById("guessInput");

const randomNum = Math.floor(Math.random() * 100) + 1;
let counter = 0;
function CheckGuessNum() {
    const userGuess = parseInt(input.value);
    counter++;
    if (userGuess === randomNum) {
        alert("Congratulations! You guessed the correct number: " + randomNum + " in " + counter + " attempts.");
    } else if (userGuess < randomNum) {
        alert("Too low! Try again.");
    } else {
        alert("Too high! Try again.");
    }    
}
