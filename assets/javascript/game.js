// Game intro and instructions
alert("Welcome to the abra psychic game. Guess what letter abra is thinking about?");


//Array of choices for the computer.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for the wins, loses, guesses-left.
var wins = 0;
var losses = 0;
var guessesLeft = 10;


//This function is run whenever the user presses a key.
document.onkeyup = function() {

//Users key choice
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

// Show users choice on index.html
	// var playerChoice = document.getElementById("users-Guess");
	// playerChoice.textContent = userGuess;

// Computers options choice
	var computerGuess = options[Math.floor(Math.random() * options.length)];

	console.log(computerGuess);

// If the user choice is equal to the computers choice.
	if (userGuess === computerGuess) {
		console.log("great");
		wins++;
	} else {
		console.log("wrong");
		losses++;
		guessesLeft--;
	}


var html = "<p>Players choice: " + userGuess + "</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses left: " + guessesLeft + "</p>";

document.querySelector('#game').innerHTML = html;

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




 