let playerScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateScore('It\'s a tie!');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        updateScore('You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection);
    } else {
        computerScore++;
        updateScore('You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection);
    }

    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

// Update score display
function updateScore(result) {
    document.getElementById('result').innerText = result;
    document.getElementById('score').innerText = 'Player Score: ' + playerScore + ', Computer Score: ' + computerScore;
}

// Announce winner
function announceWinner() {
    if (playerScore > computerScore) {
        document.getElementById('result').innerText = 'Congratulations! You are the winner.';
    } else {
        document.getElementById('result').innerText = 'Sorry, you lost the game. Better luck next time.';
    }
    // Reset scores
    playerScore = 0;
    computerScore = 0;
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', function () {
    playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function () {
    playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', function () {
    playRound('scissors', getComputerChoice());
});

