// Game intro and instructions
alert("Welcome to the abra psychic game. Guess what letter abra is thinking about?");


//Array of choices for the computer.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for the wins, loses, guesses-left.
var wins = 0;
var losses = 0;



//This function is run whenever the user presses a key.
document.onkeyup = function() {

	//Users key choice
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

	// Computers options choice
	var computerGuess = options[Math.floor(Math.random() * options.length)];

	console.log(computerGuess);

	// Conditions 
	if (userGuess === computerGuess) {
		console.log("great");
	} else {
		console.log("wrong");
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




 