///////////////////////////////////
////// Rock, Paper, Scissors //////
//////// By James Shapter /////////
///////////////////////////////////

// Display title
console.log("--- Rock, Paper, Scissors ---");
console.log("");

// Declare variables
const buttons = document.querySelectorAll('button');
const moves = ['ROCK', 'PAPER', 'SCISSORS'];
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let CPUscore = 0;
let draws = 0;
let lastResult = '';
let msg = 'Choose your first weapon!';

const sbYou = document.querySelector('#you');
sbYou.textContent = 'You: ' + playerScore;

const msgDiv = document.querySelector('#msg');
msgDiv.textContent = msg;

const sbCPU = document.querySelector('#CPU');
sbCPU.textContent = 'CPU: ' + CPUscore;

const resultDiv = document.querySelector('#result');
resultDiv.textContent = lastResult;

// Button event listener for player move select
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});

// Function to randomly select the CPU move from the list of moves
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}

// Function to play a single round, add to scores and return a message
function playRound(playerSelection, computerSelection) {
    msgDiv.textContent = 'You '+ playerSelection+ ' | '+ computerSelection+ ' CPU';
    if (playerSelection === computerSelection) {
        draws++;
//        sbDraws.textContent = 'Draws: ' + draws;
        resultDiv.textContent = "It's a draw!";

    } else {
        if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
            playerScore++;
            sbYou.textContent = 'You: ' + playerScore;
            resultDiv.textContent = "You win!";
        } else {
            CPUscore++;
            sbCPU.textContent = 'CPU: ' + CPUscore;
            resultDiv.textContent = "CPU wins...";
        }
    }    
}