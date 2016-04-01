/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber();
var guesses = [];
var numGuesses = 0;

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	return Math.floor(Math.random()*100 + 1);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
	playersGuess = (+$('#number-entry').val());
	$('#number-entry').val('');

}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here

	if(winningNumber > playersGuess){
		return "Your guess is lower than the Winning Number --- ";
	} else {
		return "Your guess is higher than the Winning Number --- ";
	}


}

function guessMessage(){

	var hintOne = "";

	if(winningNumber !== playersGuess){

		if(playersGuess >= (winningNumber-10) && playersGuess <= (winningNumber+10)){
			hintOne = "You are within 10!!";
		} else if(playersGuess >= (winningNumber-20) && playersGuess <= (winningNumber+20)){
			hintOne = "You are within 20!";
		} else if(playersGuess >= (winningNumber-30) && playersGuess <= (winningNumber+30)){
			hintOne = "You are within 30";
		} else {
			hintOne = "You are more than 30 away"
		}

		return lowerOrHigher() + hintOne;

	} else {
		return "";
	}

}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here

	numGuesses++;

	if(winningNumber === playersGuess){
		return "YOU WIN!";
	} else if(numGuesses < 5) {
		if(guesses.length !== 0){
			for(var i = 0; i < guesses.length; i++){
				if(guesses[i] === playersGuess){
					return "You already guessed that! Enter a different number!";
				} 
			}
			guesses.push(playersGuess);
			return "Wrong Number! Try again!";
		} else {
			guesses.push(playersGuess);
			return "Wrong Number! Try again!";
		}

	} else {
		guesses.push(playersGuess);
		return "YOU LOSE!"
	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here

	if((winningNumber+10) >= 100){
		return "The number is between 90 and 100";
	} else if ((winningNumber-10) <= 0){
		return "The number is between 0 and 10";
	} else {
		return "The number is between " + (winningNumber-10) + " and " + (winningNumber+10);
	}

}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
$(document).ready(function(){

	$('#guessbutton').click(function(){

		playersGuessSubmission()

		event.preventDefault();
		//alert(winningNumber);


		$('.feedback').html(guessMessage());
		$('.reply').html(checkGuess());
		$('.yourguesses').show();
		$('.guesslist').html(guesses.join(", "));
		

	});

	$('#hinter').click(function(){

		event.preventDefault();
		$('.hintarea').html(provideHint());

	});

	$('#playagain').click(function(){

		event.preventDefault();
		winningNumber = generateWinningNumber();
		$('.reply').html("");

	});

});


