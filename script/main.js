function computerPlay() {
    let things = ["rock", "paper", "scissor"]
    things = things[Math.floor(Math.random() * things.length)];
    return things;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    if (player === computer) {
        return "Game tie";
    }
    else if (player === "ROCK" && computer === "PAPER") {
        systemCount++;
        return "You Lose! Paper beats Rock";
    }
    else if (player === "ROCK" && computer === "SCISSOR") {
        humanCount++;
        return "You Win! Rock beats Scissor";
    }
    else if (player === "PAPER" && computer === "SCISSOR") {
        systemCount++;
        return "You Lose! Scissor beats Paper";
    }
    else if (player === "PAPER" && computer === "ROCK") {
        humanCount++;
        return "You Win! Paper beats Rock";
    }
    else if (player === "SCISSOR" && computer === "PAPER") {
        humanCount++;
        return "You Win! Scissor beats Paper";
    }
    else {
        systemCount++;
        return "You Lose! Rock beats Scissors";
    }
}
let humanCount = 0;
let systemCount = 0;
for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choies ?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}
if (humanCount > systemCount) {
    console.log("you win");
}
else if(humanCount<systemCount){
    console.log("you lose");
}
else{
    console.log("game tie")
}
