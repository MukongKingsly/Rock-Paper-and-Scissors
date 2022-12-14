// Game variables
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "tie";
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;
let ROUNDS = 5;

const CHOICES = ["rock", "paper", "scissors"];
// Game functions

// Determines if given word is a legal input
function isLegalChoice(word) {
  const legalChoices = CHOICES;
  return legalChoices.includes(word);
}

// Gets a random choice for the computer and returns the choice
function computerPlay() {
const randomIndex = Math.floor(Math.random() * CHOICES.length);
return CHOICES[randomIndex];
}

//  Asks the player what their choice is and returns the choice
function getplayerSelection() {
  let choice;
  while (true) {
    choice = prompt(`Remaining ${ROUNDS} rounds. \nRock, Paper, or Scissors?`, "")
      .toLowerCase()
      .trim();
    if (isLegalChoice(choice)) break;
    alert(
      `I don't know "${choice}"\nPlease enter: rock, paper, scissors.`
    );
  }
  switch (choice) {
    case ROCK:
      return ROCK;
    case PAPER:
      return PAPER;
    case SCISSORS:
      return SCISSORS;
    default:
      console.error("Unknown case");
      return;
  }
}



// Determines the result of the round.
function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return TIE;
  if (playerSelection === ROCK) {
    if (computerSelection === SCISSORS) return PLAYER;
    if (computerSelection === PAPER) return COMPUTER;
  }
  else if (playerSelection === PAPER) {
    if (computerSelection === SCISSORS) return COMPUTER;
    else if (computerSelection === ROCK) return PLAYER;
  }
  else if (playerSelection === SCISSORS) {
    if (computerSelection === ROCK) return COMPUTER;
    else if (computerSelection === PAPER) return PLAYER;
  }
}


// Handles displaying message to the user and incrementing the scores at the end of the round.
function handleWinner(winner, playerSelection, computerSelection) {
  let msg = "";
  if (winner === PLAYER) {
    msg += `🎉 You won! ${playerSelection} beats ${computerSelection}`;
    PLAYER_SCORE++;
  }
  else if (winner === COMPUTER) {
    msg += `😢 You lost! ${computerSelection} beats ${playerSelection}`;
    COMPUTER_SCORE++;
  }
  if (winner === TIE) msg += "😲 It's a tie!";
  msg += `\nYou chose ${playerSelection}, the computer chose ${computerSelection}.`;
  msg += `\n\nThe score is now:\nYou: ${PLAYER_SCORE} – Computer: ${COMPUTER_SCORE}`;
  return console.log(msg);
}

// Handles playing one round of Rock, Paper, Scissors.
function playRound() {
  const playerSelection = getplayerSelection();
  const computerSelection = computerPlay();
  const winner = determineWinner(playerSelection, computerSelection);
  handleWinner(winner, playerSelection, computerSelection);
  return true;
}


// Call this function to play the game
function game() {
  while (ROUNDS > 0) {
    playRound();
    ROUNDS--;
  }
  if (PLAYER_SCORE > COMPUTER_SCORE) {
    console.log(`Congratulations you won 🍾🍾🍾!!! Final score is You: ${PLAYER_SCORE} - Computer: ${COMPUTER_SCORE}`);
  } else if (PLAYER_SCORE < COMPUTER_SCORE) {
    console.log(`Sorry you lose 😞😞😞! Final score is You: ${PLAYER_SCORE} - Computer: ${COMPUTER_SCORE}`)
  } else if (PLAYER_SCORE == COMPUTER_SCORE) {
    console.log(`It's a tie!!!  Final score is You: ${PLAYER_SCORE} - Computer: ${COMPUTER_SCORE}`)
  }
}


