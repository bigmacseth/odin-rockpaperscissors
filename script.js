function computerSelection() {
  return Math.floor(Math.random() * 3);
}

let cpuScore = 0;
let userScore = 0;

function updateScore(result) {

    // all this does is make it easier to read the inside of the switch cases.

    const resultCard = document.querySelector("#result");
    const userScoreCard = document.querySelector("#userScoreCard");
    const cpuScoreCard = document.querySelector("#cpuScoreCard");

    // these lines update the DOM elements associated with them when the function is called.
    resultCard.textContent = result;
    userScoreCard.textContent = 'Your Score Is: ' + userScore;
    cpuScoreCard.textContent = "The CPU's Score Is: " + cpuScore;
};


const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (e) => {
    let target = e.target;
    let cpuSelection;
    switch(target.id) {

        //cpu selections are based on numbers (0 = rock 1 = paper 2 = scissors)    
        case 'rock':
            cpuSelection = computerSelection();
            if (cpuSelection === 0) {

                // draw does nothing except update the resultCard DOM object.
                updateScore('DRAW');
                console.log('draw');

            } else if (cpuSelection === 1) {

                // user wins, adding 1 to their score and updating the resultCard.
                userScore++;
                updateScore('YOU WON');
                console.log('user won!');

            } else {

                // cpu wins, adding 1 to their score and updating the resultCard.
                cpuScore++;
                updateScore('CPU WON');
                console.log('cpu won :(');

            }
            break;

        case 'paper':
            cpuSelection = computerSelection();
            if (cpuSelection === 1) {

                updateScore('DRAW');
                console.log('draw');

            } else if (cpuSelection === 0) {

                userScore++;
                updateScore('YOU WON');
                console.log('user won!');

            } else {

                cpuScore++;
                updateScore('CPU WON');
                console.log('cpu won :(');

            }
            break;

        case 'scissors': 
            cpuSelection = computerSelection();
            if (cpuSelection === 2) {

                updateScore('DRAW');
                console.log('draw');

            } else if (cpuSelection === 1) {

                userScore++;
                updateScore('YOU WON');
                console.log('user won!');

            } else {

                cpuScore++;
                updateScore('CPU WON');
                console.log('cpu won :(');
            }
            break;
    }
});