console.log("--- Rock, Paper, Scissors ---");
console.log("");

function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else {
        if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            return "You win!";
        } else {
            return "CPU wins...";
        }
    }    
}

const moves = ['Rock', 'Paper', 'Scissors'];
const playerSelection = 'Scissors';
const computerSelection = computerPlay();

console.log('You play: ', playerSelection);
console.log('CPU plays: ', computerSelection);

console.log(playRound(playerSelection, computerSelection));