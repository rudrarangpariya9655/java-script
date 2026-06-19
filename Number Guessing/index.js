const randomNumber = Math.floor(Math.random() * 100) + 1;
const input = document.querySelector('.guuessNumber');
const guessButton = document.querySelector('.guessButton');
const div = document.querySelector('.container');

let numbers = [10,20,30,40,50,60,70,80,90];
let count = 7;

function startGuessing() {

    if (count === 0) return;

    if (input.value.trim() === "") {
        alert("Please enter a number");
        return;
    }

    const userGuess = Number(input.value);
    count--;

    let Hint2 = Math.floor(randomNumber / 10) * 10;
    let Hint = Hint2 + 10;
    if (userGuess === randomNumber) {
        alert('Correct! You won 🎉');
        input.readOnly = true;
        guessButton.disabled = true;
        return;
    } 
    else if (userGuess > randomNumber) {
        alert(`It is too high. Left ${count} attempts \nHint around: ${Hint2}-${Hint}`);
    } 
    else if(userGuess < randomNumber && count!==0) {
        alert(`It is too low. Left ${count} attempts \nHint around: ${Hint2}-${Hint}`);
    }

    if (count === 0) {
        alert(`You lost all attempts 😢\n the answer is : ${randomNumber}`);
        input.readOnly = true;
        guessButton.disabled = true;

        const newButton = document.createElement('button');
        newButton.textContent = "Restart";
        div.appendChild(newButton);

        newButton.addEventListener("click", function() {
            location.reload();
        });
    }

    input.value = "";
}