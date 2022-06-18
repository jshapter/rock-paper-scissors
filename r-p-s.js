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
let lastResult = 'Choose your first weapon!';

const sbYou = document.querySelector('#you');
let sbPlayer = document.createElement('div');
sbPlayer.textContent = 'You: ' + playerScore;
sbYou.appendChild(sbPlayer);

const sbDraws = document.querySelector('#draws');
let sbDrawsCon = document.createElement('div');
sbDrawsCon.textContent = 'Draws: ' + draws;
sbDraws.appendChild(sbDrawsCon);

const sbCPU = document.querySelector('#CPU');
let sbCPUcon = document.createElement('div');
sbCPUcon.textContent = 'CPU: ' + CPUscore;
sbCPU.appendChild(sbCPUcon);

const resultDiv = document.querySelector('#result');
let resultCon = document.createElement('div');
resultCon.textContent = lastResult;
resultDiv.appendChild(resultCon);

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
    resultDiv.textContent = 'You '+ playerSelection+ ' | '+ computerSelection+ ' CPU';
    console.log('You ', playerSelection, ' | ', computerSelection, ' CPU');
    if (playerSelection === computerSelection) {
        draws++;
        sbDraws.textContent = 'Draws: ' + draws;
        resultDiv.textContent = "It's a draw!";

    } else {
        if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
            playerScore++;
            sbPlayer.textContent = 'You: ' + playerScore;
            resultDiv.textContent = "You win!";
        } else {
            CPUscore++;
            sbCPU.textContent = 'CPU: ' + CPUscore;
            resultDiv.textContent = "CPU wins...";
        }
    }    
}