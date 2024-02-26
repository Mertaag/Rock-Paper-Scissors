function getComputerChoice() {
    //GET a random number from 0 to 2
    let answer = Math.floor(Math.random() * 3);
    //RETURN "Rock", "Paper" or "Scissors" depending on number;
    switch (answer) {
        case 0:
            answer = "rock";
            break;

        case 1:
            answer = "paper";
            break;

        case 2:
            answer = "scissors";
            break;
    }
    return answer;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "draw";
            case "paper":
                return "lose";
            case "scissors":
                return "win";
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "win";
            case "paper":
                return "draw";
            case "scissors":
                return "lose";
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "lose";
            case "paper":
                return "win";
            case "scissors":
                return "draw";
        }
    } else {
        return "User input error"
    }

}

const buttons = document.querySelector('#buttons');
const results = document.querySelector('#results');
let para = '';

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            para = document.createElement('P');
            results.appendChild(para);
            para.textContent = (playRound('rock', getComputerChoice()));
            winCounter();
            break;
        case 'paper':
            para = document.createElement('P');
            results.appendChild(para);
            para.textContent = (playRound('rock', getComputerChoice()));
            winCounter();
            break;
        case 'scissors':
            para = document.createElement('P');
            results.appendChild(para);
            para.textContent = (playRound('rock', getComputerChoice()));
            winCounter();
            break;
    }
})

let playerWins = 0;
let computerWins = 0;

function winCounter() {
    if (para.textContent === 'win') {
        ++playerWins;
    } else if (para.textContent === 'lose') {
        ++computerWins;
    }

    let score = document.querySelector('#score');

    if (playerWins < 5 && computerWins < 5) {
        score.textContent = `the score is ${playerWins} to ${computerWins}`;
    } else if (playerWins >= 5) {
        score.textContent = `the score is ${playerWins} to ${computerWins}, you WIN!`;
        results.innerHTML = '';
        playerWins = 0;
        computerWins = 0;
    } else {
        score.textContent = `the score is ${playerWins} to ${computerWins}, you LOSE :(`;
        results.innerHTML = '';
        playerWins = 0;
        computerWins = 0;
    }
}


