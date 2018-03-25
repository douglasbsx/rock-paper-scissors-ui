let playerSelection, computerSelection;
let pscore = 0;
let cscore = 0;
let round = 0;
const plays = ["rock", "paper", "scissors"];

const roundPanel = document.querySelector('#roundPanel');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const rockBtn = document.getElementById('btnRock');
const paperBtn = document.getElementById('btnPaper');
const scissorsBtn = document.getElementById('btnScissors');


rockBtn.addEventListener('click', play);
paperBtn.addEventListener('click', play);
scissorsBtn.addEventListener('click', play);

		
function computerPlay() {
	return plays[Math.floor(Math.random() * plays.length)];
}

function play(e) {
	playerSelection = e.target.textContent.toLowerCase();
	playRound(playerSelection, computerPlay());
}

function checkWinner() {
	if(cscore == 5) {
		roundPanel.innerText = "Computer WON the game!";
		playerScore.innerText = "Player Score";
		computerScore.innerText = "Computer Score";
		pscore = 0;
		cscore = 0;
		round = 0;
	} else if(pscore == 5) {
		roundPanel.innerText = "Player WON the game!";
		playerScore.innerText = "Player Score";
		computerScore.innerText = "Computer Score";
		pscore = 0;
		cscore = 0;
		round = 0;
	}
}

function playRound(playerSelection, computerSelection) {
	round++;

	roundPanel.innerText = `== Round ${round} == \n
							Player Chose: ${playerSelection}\n
							Computer Chose: ${computerSelection}`; 

	if (playerSelection == computerSelection) {
		roundPanel.innerText += "\n\nRound DRAW, no points award";
		return;
	}

	if (playerSelection == "rock") {
		if(computerSelection == "paper") {
			cscore++;
			roundPanel.innerText += "\n\nPaper beats Rock, Computer WIN";
			computerScore.innerText = `Computer Score: ${cscore}`;
			checkWinner();
			return;
		} else {
			pscore++;
			roundPanel.innerText += "\n\nRock beats Scissors, Player WIN";
			playerScore.innerText = `Player Score: ${pscore}`;
			checkWinner();
			return;
		}
	} else if(playerSelection == "paper") {
		if(computerSelection == "rock") {
			pscore++;
			roundPanel.innerText += "\n\nPaper beats Rock, Player WIN";
			playerScore.innerText = `Player Score: ${pscore}`;
			checkWinner();
			return;
		} else {
			cscore++;
			roundPanel.innerText += "\n\nScissors beats Paper, Computer WIN";
			computerScore.innerText = `Computer Score: ${cscore}`;
			checkWinner();
			return;
		}
	} else if(computerSelection == "rock") {
			cscore++;
			roundPanel.innerText += "\n\nRock beats Scissors, Computer WIN";
			computerScore.innerText = `Computer Score: ${cscore}`;
			checkWinner();
			return;
	} else {
		pscore++;
		roundPanel.innerText += "\n\nScissors beats Paper, Player WIN";
		playerScore.innerText = `Player Score: ${pscore}`;
		checkWinner();
		return;
	}
}
