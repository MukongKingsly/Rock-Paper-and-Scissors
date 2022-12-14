const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column");
const playerScoreParagraph = document.querySelector("[data-player-score]");
const computerScoreParagraph = document.querySelector("[data-computer-score]");

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
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find((selection) => selection.name === selectionName);

    makeSelection(selection);
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

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection)

  // We pass the coputer selection first because we are going to be inserting each
  // new selection at the top, immediately under the You .. Computer text
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) {
    incrementScore(playerScoreParagraph);
  }
  if (computerWinner) {
    incrementScore(computerScoreParagraph);
  }
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) {
    // Giving the larger look
    div.classList.add("winner");
  }
finalColumn.after(div)
}