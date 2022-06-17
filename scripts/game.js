let playerSelection;
let computerSelection;
let score ={player:0,computer:0,tie:0};
const items = ["rock","paper", "scissors"];

function computerPlay() {
return items[~~(Math.random()* items.length)];
}

function playerPlay(){
    let play = prompt("Please choose one: rock, paper, or scissors.").toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    if ( playerSelection == computerSelection){
        console.log("Tie!");
        score.tie ++; 
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper"))
        {
        console.log("Player Wins!!!");
        score.player ++;
    } else if (
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors"))
        {
        console.log("Player Loses!");
        score.computer ++;
    } else {
        playerSelection = prompt("SOMETHING WENT WRONG!\nMake sure you are entering:\nRock, Paper, or Scissors.").toLowerCase();
        playRound(playerSelection, computerSelection);
    }

}

function game(){

    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay());
    }
    
    console.log(`With ${score.player} wins, ${score.computer} losses and ${score.tie} ties:`);
    
    if ( score.player > score.computer){
        console.log("Player Wins The Game!");
        } else if ( score.player < score.computer){
        console.log("Player Loses The Game!");
    } else {
        console.log("The Game is a Tied!");
    }

}

game();
