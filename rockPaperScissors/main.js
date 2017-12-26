function computerPlay(){
	let move = ["Rock", "Paper", "Scissors"];
	return move[Math.floor(Math.random() * move.length)];
}

function playRound(playerSelection, computerSelection) {
	let player = playerSelection.toLowerCase();
	let comp = computerSelection.toLowerCase();
	let r = "rock";
	let s = "scissors";
	let p = "paper";
	if (player === comp){
		return "tie"
	}
	else if (player===r&&comp===s||player===s&&comp===p||player===p&&comp===r){
		return `You win! ${player} beats ${comp}`
	}
	else{
		return `You lose! ${comp} beats ${player}`	
	}

}

function game(){
	let playerWins = 0;
	let compWins = 0;
	while(playerWins<=5 && compWins<= 5){
		playerSelection = prompt("Enter your move");
		let computerSelection = computerPlay()
		let result = playRound(playerSelection, computerSelection);
		console.log(result)
		console.log(`Wins: ${playerWins}, Losses: ${compWins}`)
		if(result!=="tie"){
			if (result.search("win") != -1)	{
				playerWins++;
			}
			else{
				compWins++;
			}
		}
	}
}

game()