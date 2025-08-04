function computerSelection() {
  return Math.floor(Math.random() * 3);
}

let cpuScore = 0;
let userScore = 0;

// inputComputer is a number (0 = rock 1 = paper 2 = scissors)
function playGame(inputUser, inputComputer) {
  switch (inputUser) {
    case "rock":
      if (inputComputer == 0) {
        // draw
        console.log("No one wins, its a draw!");
      } else if (inputComputer == 1) {
        // cpu wins
        cpuScore++;
        console.log("The CPU wins its score is " + cpuScore);
      } else {
        // user wins
        userScore++;
        console.log("You have won! Your score is now " + userScore);
      }
      break;

    case "paper":
      if (inputComputer == 1) {
        // draw
        console.log("No one wins, its a draw!");
      } else if (inputComputer == 2) {
        // cpu wins
        cpuScore++;
        console.log("The CPU wins its score is " + cpuScore);
      } else {
        // user wins
        userScore++;
        console.log("You have won! Your score is now " + userScore);
      }
      break;

    case "scissors":
      if (inputComputer == 2) {
        // draw
        console.log("No one wins, its a draw!");
      } else if (inputComputer == 0) {
        // cpu wins
        cpuScore++;
        console.log("The CPU wins its score is " + cpuScore);
      } else {
        // user wins
        userScore++;
        console.log("You have won! Your score is now " + userScore);
      }
      break;
  }
}

function showPrompt() {
  return (userInput = prompt(
    "This is Rock, Paper, Scissors! Please pick one of the three to begin: "
  ));
}

function updateScore(element, score) {
    
};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (e) => {
    let target = e.target;
    let cpuSelection;
    switch(target.id) {
        //cpu selections are based on numbers (0 = rock 1 = paper 2 = scissors)    
        case 'rock':
            cpuSelection = computerSelection();
            if (cpuSelection === 0) {
                console.log('draw');
            } else if (cpuSelection === 1) {
                console.log('user won!');
            } else {
                console.log('cpu won :(');
            }
            break;
        case 'paper':
            cpuSelection = computerSelection();
            if (cpuSelection === 1) {
                console.log('draw');
            } else if (cpuSelection === 0) {
                console.log('user won!');
            } else {
                console.log('cpu won :(');
            }
            break;
        case 'scissors': 
            cpuSelection = computerSelection();
            if (cpuSelection === 2) {
                console.log('draw');
            } else if (cpuSelection === 1) {
                console.log('user won!');
            } else {
                console.log('cpu won :(');
            }
            break;
    }
});