var randomNumber = parseInt(Math.random() * 100 + 1);

let userInput = document.querySelector('#guess')
let submit = document.querySelector('#submit')
let guessSlots = document.querySelector('#guessList')
let remaining = document.querySelector('#remainingAttempts')
let lowwOrHigh = document.querySelector('#ex')
let startOver = document.querySelector('#container');


const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess)

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Invalid guess: Please enter a valid guess");
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over: Random number was ${randomNumber}`);
            endgame();

        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }

    }


}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right');
        endgame();

    }
    else if (guess < randomNumber) {
        displayMessage('Your guess is Tooo low');

    }
    else {
        displayMessage('Your guess is Tooo large');


    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlots.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;


}
function displayMessage(message) {
    lowwOrHigh.innerHTML = `<h2>${message}</>`;


}
function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 class="newgame">Start a New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newgame();

}
function newgame() {
    let newGameButton = document.querySelector('.newgame');

    newGameButton.addEventListener('click', function (e) {
        var randomNumber = parseInt(Math.random() * 100 + 1);

        prevGuess = [];
        numGuess = 1;
        guessSlots.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        lowwOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })
}

let buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'dark') {
            
            document.body.style.backgroundColor = 'black';
        }
       if(e.target.id === 'light') {
            document.body.style.backgroundColor = '#FFFFFF';
        }
    })
})
