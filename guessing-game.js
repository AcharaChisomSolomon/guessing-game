// create a guessing game where the user guesses a random number specified by the computer using the range entered by the user
// the user will be prompted to enter a number until they guess the correct number
// the user will only have a limited number of guesses specified by the user

// create a function to get the range from the user
// create a function to get the number of guesses from the user
// create a function to generate a random number between the range specified by the user
// create a function to prompt the user to guess a number
// create a function to check if the user guessed the correct number

const readline = require('readline');
const secretNumber = 100

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkGuess(guess, answer) {
    if (guess > answer) {
        console.log('Too high.');
        return false;
    } else if (guess < answer) {
        console.log('Too low.');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function askGuess(answer) {
    rl.question('Enter a guess: ', (guess) => {
        if (checkGuess(guess, answer)) {
            rl.close();
        } else {
            askGuess(answer);
        }
    });
}

askGuess(secretNumber);