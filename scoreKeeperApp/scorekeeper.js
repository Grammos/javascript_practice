var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;



//Player One button

p1Button.addEventListener("click", function(){
   if(!gameOver){
	 p1Score++;
	 if(p1Score === winningScore){
	 	p1Display.classList.add("winner");
	 	gameOver = true;
	 }

	 p1Display.textContent = p1Score;
   }
});


//Player Two button

p2Button.addEventListener("click", function(){
  if(!gameOver){
  	p2Score++;
  	if(p2Score === winningScore){
  	   p2Display.classList.add("winner")
  		gameOver = true;
  	}
  }
   p2Display.textContent = p2Score;

});



//Reset button

resetButton.addEventListener("click", function(){

	reset();

});



function reset(){

	p1Score = 0;
	p2Score = 0;

	p1Display.textContent = 0;
	p2Display.textContent = 0;

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

	gameOver = false;
}



//everytime the winning score change,

numInput.addEventListener("change", function(){
	//added the numbers to the MSG of the 'Playin to: the users' input
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});


