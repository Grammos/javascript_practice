//adding a list of colors to the divs' square, a random one

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

//picked color to start the game
var pickedColor = colors[3];
//updating the color which would start the game
var colorDisplay = document.getElementById("colorDisplay");

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
	  	alert("Correct");
	  }else{
	  	alert("Wrong!");
	  }

	});
}

