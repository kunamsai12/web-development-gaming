const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultEl = document.getElementById('result');
const choices = document.querySelectorAll('.choice');

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playRound = (playerChoice) => {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    return `It's a tie! Both chose ${playerChoice}.`;
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
};

choices.forEach((button) => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    const result = playRound(playerChoice);
    resultEl.textContent = result;
  });
});
