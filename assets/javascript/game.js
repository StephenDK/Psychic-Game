// Game intro and instructions
//alert("Welcome to the abra psychic game. Guess what letter abra is thinking about?");


//Array of choices for the computer.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for the wins, loses, guesses-left.
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// This function wil reset the game counters.
var resetGame = function() {
	wins = 0;
	losses = 0;
	guessesLeft = 9;
	document.getElementById("users-Guess").innerHTML = "";
}



//This function is run whenever the user presses a key.
document.onkeyup = function() {


//Users key choice
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

// 
// Show users selection on index.html
	var targetSpan = document.getElementById("users-Guess");
	
	var newSpan = document.createElement("span");


	newSpan.innerHTML = userGuess;
	targetSpan.appendChild(newSpan);



// Computers choice through the options array.
	var computerGuess = options[Math.floor(Math.random() * options.length)];

	console.log(computerGuess);


// If the user choice is equal to the computers choice conditions.
	if (userGuess === computerGuess) {
		console.log("great");
		wins++;
	} else {
		console.log("wrong");
		losses++;
		guessesLeft--;
	}


// index.html wins, losses, guessesLeft out put.
var html = "<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses left: " + guessesLeft + "</p>";

document.querySelector('#game').innerHTML = html;

// Reset game conditional statement. 
if (guessesLeft <= "0") {
	resetGame();
}

}
























// 	 // var playerChoice = document.getElementById("users-Guess");
// 	 // playerChoice.textContent = event.key;

// 	 // //Below is the wins span on index.html
// 	 // var playerWin = document.getElementById("wins");
	 


// // Below is the computers random letter selector function.
// var computerGuess = function() {
// 	var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// 	return randomLetter;
// }

// computerGuess();

// }
//This is the start of the game loop.




 