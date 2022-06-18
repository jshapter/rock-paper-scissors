///////////////////////////////////
////// Rock, Paper, Scissors //////
//////// By James Shapter /////////
///////////////////////////////////

// Display title
console.log("--- Rock, Paper, Scissors ---");
console.log("");

// Declare variables
const moves = ['ROCK', 'PAPER', 'SCISSORS'];
let playerSelection = "";
let playerScore = 0;
let CPUscore = 0;
let draws = 0;

// Function to randomly select the CPU move from the list of moves
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}

// Function to play a single round, add to scores and return a message
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draws++;
        return "It's a draw!";
    } else {
        if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
            playerScore++;
            return "You win!";
        } else {
            CPUscore++;
            return "CPU wins...";
        }
    }    
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = "";

        while ((playerSelection !== '1') && (playerSelection !== '2') && (playerSelection !== '3')) {
            playerSelection = prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissors:");
        }

        playerSelection = moves[playerSelection -1];
        const computerSelection = computerPlay();

        console.log('You play: ', playerSelection);
        console.log('CPU plays: ', computerSelection);

        console.log(playRound(playerSelection, computerSelection));
        console.log("Score: CPU - ", CPUscore, " You - ", playerScore);
        console.log("");
    }
}

game();

if (playerScore > CPUscore) {
    console.log("You win the game with ", playerScore, " points!");
} else {
    console.log("CPU wins the game :(");
}
console.log(draws, ' draws')