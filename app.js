const options = document.querySelector("[data-options");
const selectionButtons = document.querySelectorAll("[data-option]");
// const btn = document.getElementById("btn");
// const btn = document.getElementsByClassName("btn");
const btn = document.getElementsByTagName("button");
const finalColumn = document.querySelector("[data-final-column");
const playerScoreParagraph = document.querySelector("[data-player-score]");
const computerScoreParagraph = document.querySelector("[data-computer-score]");

let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊🏻",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋🏻",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌🏻",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.option;
    const selection = SELECTIONS.find((selection) => selection.name === selectionName);

      if (PLAYER_SCORE < 5 && COMPUTER_SCORE < 5) {
        playRound(selection)
      } else {
        const div = document.createElement("div");
        div.classList.add("result-heading");
        div.innerText = (PLAYER_SCORE === 5) ? "Player won! Reload to restart." : "Computer won! Reload to restart."
        options.after(div);
        for (let i in btn) {
          btn[i].disabled = true;
        }
      }
  });
});

function incrementScore(scoreParagraph) {
  scoreParagraph.innerText = parseInt(scoreParagraph.innerText) + 1;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex]
  };

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
};

function playRound(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection)

  // We pass the coputer selection first because we are going to be inserting each
  // new selection at the top, immediately under the You .. Computer text
  addResult(computerSelection, computerWinner)
  addResult(selection, yourWinner)

    if (yourWinner) {
      incrementScore(playerScoreParagraph);
      PLAYER_SCORE++
    }
    if (computerWinner ) {
      incrementScore(computerScoreParagraph);
      COMPUTER_SCORE++
    }
  }

function addResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) {
    // Giving the larger look
    div.classList.add("winner");
  }
finalColumn.after(div)
}