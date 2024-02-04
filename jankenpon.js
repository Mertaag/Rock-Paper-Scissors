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

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let winner = "";

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) === "win") {
            ++playerWins;
            console.log(`You have won ${playerWins} round(s)`);
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            ++computerWins
            console.log(`Computer has won ${computerWins} round(s)`);
        } else if (playRound(playerSelection, computerSelection) === "draw") {
            console.log("It's a draw");
        } else {
            ++computerWins
            console.log('You tried to cheat, computer gets the point');
        }
    }

    let result = "";
    if (playerWins > computerWins) {
        result = "win"
    } else if (playerWins < computerWins) {
        result = "loss"
    } else {
        result = "draw"
    }

    console.log(`Final score is ${playerWins} to ${computerWins}, it is a ${result}!`);
}


playGame();