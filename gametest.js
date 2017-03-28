var secretNumber = 4;

var guess = Number(prompt("Guess a number")); 




if(guess === secretNumber)
{
	alert("YOU GOT IT RIGHT!");
}
else if(guess > secretNumber){

   alert("TOO HIGHHHH! Guess again..");
}
else {

	alert("TOO LOWWW! Guess again..");

}