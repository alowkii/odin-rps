let humanScore, computerScore;
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

function getHumanChoice() {
  const humanChoice = parseInt(prompt('Enter your choice: 0 for rock, 1 for paper, 2 for scissors'));
  return humanChoice;
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return 0;
    }else if (humanChoice === 0 && computerChoice === 1) {
        return -1;
    }else if (humanChoice === 1 && computerChoice === 2) {
        return -1;
    }else if (humanChoice === 2 && computerChoice === 0) {
        return -1;
    } else if (humanChoice > 2 ) {
        return 0;
    } else {
        console.log('You win!');
        return 1;
    }
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  const winner = determineWinner(humanChoice, computerChoice);
  if (winner === 1) {
    humanScore++;
  } else if (winner === -1) {
    computerScore++;
    console.log('Computer wins!');
  }
}

humanScore = 0;
computerScore = 0;
for (let i = 0; i < 5; i++) {
playRound();
}
console.log('Human score: ' + humanScore);
console.log('Computer score: ' + computerScore);