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
                break;
            case "paper":
                return "lose";
                break;
            case "scissors":
                return "win";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "win";
                break;
            case "paper":
                return "draw";
                break;
            case "scissors":
                return "lose";
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "lose";
                break;
            case "paper":
                return "win";
                break;
            case "scissors":
                return "draw";
                break;
        }
    } else {
        return "User input error"
    }

}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));