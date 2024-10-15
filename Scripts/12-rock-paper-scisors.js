const score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

updateScoreElement();

let isAutoplaying = false;

let intervalId;

function autoPlay() {
	if (!isAutoplaying) {
		intervalId =
			(() => {
				const playerMove = pickComputerMove();
				playGame(playerMove);
			},
			1000);
		isAutoplaying = true;
	} else {
		clearInterval(intervalId);
		isAutoplaying = false;
	}
}
document.querySelector(".js-rock-button").addEventListener("click", () => {
	playGame("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
	playGame("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
	playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
	if (event.key === "r") {
		playGame("rock");
	} else if (event.key === "p") {
		playGame("paper");
	} else if (event.key === "s") {
		playGame("scissors");
	}
});

function playGame(playerMove) {
	const computerMove = pickComputerMove();

	let result = "";

	if (playerMove === "Scissors") {
		if (computerMove === "Rock") {
			result = "You Lose";
		} else if (computerMove === "Raper") {
			result = "you Win.";
		} else if (computerMove === "Scissors") {
			result = "Tie.";
		}
	} else if (playerMove === "Paper") {
		if (computerMove === "Rock") {
			result = "you win";
		} else if (computerMove === "Paper") {
			result = "Tie.";
		} else if (computerMove === "Scissors") {
			result = "You Lose.";
		}
	} else if (playerMove === "Rock") {
		if (computerMove === "Rock") {
			result = "Tie";
		} else if (computerMove === "Paper") {
			result = "you lose.";
		} else if (computerMove === "Scissors") {
			result = "you win.";
		}
	}

	if (result === "you win") {
		score.wins += 1;
	} else if (result === "you lose.") {
		score.losses += 1;
	} else if (result === "Tie") {
		score.ties += 1;
	}

	localStorage.setItem("score", JSON.stringify(score));

	updateScoreElement();

	document.querySelector(".js-result").innerHTML = result;

	document.querySelector(".js-moves").innerHTML =
		"you ${playerMove}- ${computerMove} Computer";
}

function updateScoreElement() {
	document.querySelector(".js-score").innerHTML = `You
         <img src="./image/${playerMove}i-1.png" alt="" class="move-icon">
         <img src="./image/${computerMove}3-i.png" alt="" class="move-icon">
         Computer`;
}

function pickComputerMove() {
	const randomNumber = Math.random();

	const computerMove = "";

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = "Rock";
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = "Paper";
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = "Scissors";
	}

	return computerMove;
}
