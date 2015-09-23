////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Validates user input is either rock, paper, or scissors on each call before entering switch
    
    var correctInput = false;
    while(correctInput === false) {
        move = getInput();
        if(move === "rock" || move=== "paper" || move === "scissors"){
            correctInput = true;
        }
    }

    // Evaluates user input and assigns it to playerMove variable
   
    var playerMove;
    switch(move) {
	case "rock":
		playerMove="rock";
		break;
	case "paper":
		playerMove="paper";
		break;
	case "scissors":
		playerMove="scissors";
		break;
	default:
		getInput();
    }

    // Returns user's move

    return playerMove;
}

function getComputerMove(move) {
    // Gets random move for computer player from code above

    move = randomPlay();
    var computerMove;
    switch(move) {
	case "rock":
		computerMove="rock";
		break;
	case "paper":
		computerMove="paper";
		break;
	case "scissors":
		computerMove="scissors";
		break;
	default:
		randomPlay();
    }
    
    // Returns computer player's move

    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Test user and computer player moves and determines winner for round
    // Assumes that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if((playerMove==="rock" && computerMove==="rock") || (playerMove==="scissors" && computerMove==="scissors") || (playerMove==="paper" && computerMove==="paper")){
	winner="tie";	
    } else if (playerMove==="rock" && computerMove==="scissors") {
	winner="player";	
    } else if (playerMove==="rock" && computerMove==="paper") {
	winner="computer";
    } else if (playerMove==="paper" && computerMove==="rock") {
	winner="player";
    } else if (playerMove==="paper" && computerMove==="scissors") {
	winner="computer";
    } else if (playerMove==="scissors" && computerMove==="paper") {
	winner="player";
    } else if (playerMove==="scissors" && computerMove==="rock") {
	winner="computer";
    }

    // Returns winner of each round

    return winner;
}

function playToFive() {
    // Begins game and initializes wins variables

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Gets players moves and reports results of each round

    while(playerWins<5 && computerWins<5){
	var playerMove = getPlayerMove();
	var computerMove = getComputerMove();
	var winner = getWinner(playerMove, computerMove);

	console.log("-Computer played " + computerMove);

	if(winner==="player"){
		playerWins+=1;
		console.log("-Player Wins Round");
	} else if(winner==="computer") {
		computerWins+=1;
		console.log("-Computer Wins Round");
	} else {
		console.log("-Tie!");
	}
	console.log("-Current score (player vs. comp) =" + playerWins + "," + computerWins);
    }

    // Reports final score [Player, Computer]

    return [playerWins, computerWins];
}

function playTo(num) {
    // Begins game and initializes wins variables

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Gets players moves and reports results of each round until wins of one player equals num rounds specified

    while(playerWins<num && computerWins<num){
	var playerMove = getPlayerMove();
	var computerMove = getComputerMove();
	var winner = getWinner(playerMove, computerMove);
	console.log("-Computer played " + computerMove);
	if(winner==="player"){
		playerWins+=1;
		console.log("-Player Wins Round");
	} else if(winner==="computer") {
		computerWins+=1;
		console.log("-Computer Wins Round");
	} else {
		console.log("-Tie!");
	}
	console.log("-Current score (player vs. comp) =" + playerWins + "," + computerWins);
    }

    // Reports final score [Player, Computer]

    return [playerWins, computerWins];
}

//Plays Rock, Paper, Scissors game until a player has 5 wins (delete forward slashes to use, then comment out playTo(num)

//playToFive();

//Plays Rock, Paper, Scissors game for a specified number of times

playTo(6);