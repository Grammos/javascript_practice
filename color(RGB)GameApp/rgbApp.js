//a list of colors
var colors = [
   "rgb(255, 0, 0)",
   "rgb(255, 255, 0)",
   "rgb(0, 255, 0)",
   "rgb(0, 255, 255)",
   "rgb(0, 0, 255)",
   "rgb(255, 0, 255)"
]

//select the squares and loop through them in order to assign
//a color from the above list - refere this as A 
var squares = document.querySelectorAll(".square");

//picked a random color to start the game
var pickedColor = pickColor();
//updating the color which would start the game
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

// A
for(var i=0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
	  //grab color of clicked square
	  var clickedColor = this.style.background;
	  //compare color to pickedColor
	  if(clickedColor === pickedColor)
	  {
	  	messageDisplay.textContent = "Corret!";
	  	changeColors(clickedColor);
	  }else{
	   this.style.background = "#232323";
	   messageDisplay.textContent = "Try Again";
	  }

	});
}

function changeColors(color){
	//loop through all squares
	for(var i=0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.background = color;
	}

}

//random color picker 
function pickColor(){
	//picked a random color and return that
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

