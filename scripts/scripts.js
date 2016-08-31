/**
 * Created by kpham on 8/30/16.
 */
/*
1. Generate a random number between 1-100, store this number
2. Give them a way to guess, and store their guess
3. Keep track of what guess number they're on, store this number
4. Evaluate if their guess is higher or lower than the random number
5. If higher, display "higher", if lower, display "lower"
6. Allow them to guess again and keep track
7. Repeat 2-6 until they hit their tenth guess
8. On their tenth guess, run steps 4-5
9. Display that they have run out of guesses
10. Provide them a way to start over
 */


//Variables

var minNum = 1;
var maxNum = 100;
var randomNum = randomNumFunc(minNum, maxNum);
var guessCounter = 0;
var maxNumGuesses = 10;


// 1. Generate a random number between 1-100, store this number
function randomNumFunc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//2. Give them a way to guess, and store their guess
//function myGuess() {
//    var guessObj = document.getElementById(guessVar).value;
//}

//3. Keep track of what guess number they're on, store this number
function onGuess() {
    var userGuessVal = document.getElementById('userGuess').value;
    guessCounter ++;;

    if (guessCounter < maxNumGuesses && userGuessVal < randomNum) {
        //4. Evaluate if their guess is higher or lower than the random number
        //5. If higher, display "higher", if lower, display "lower"
        alert('Higher. You guessed ' + userGuessVal + '. ' + 'You have ' + (maxNumGuesses - guessCounter) + ' guesses remaining.');
    } else if (guessCounter < maxNumGuesses && userGuessVal > randomNum) {
        alert('Lower. You guessed ' + userGuessVal + '. ' + 'You have ' + (maxNumGuesses - guessCounter) + ' guesses remaining.');
    } else if (guessCounter < maxNumGuesses && userGuessVal === randomNum) {
        alert ('Winner, winner, chicken dinner!');
    } else {
        alert('You have no remaining guesses.');
    }
}
