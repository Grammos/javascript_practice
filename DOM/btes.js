var b1 = document.querySelector("button");
//var isPurple = false;


// b1.addEventListener("click", function(){

// 	if(isPurple)
// 	{
// 		document.body.style.background = "white";
// 		//isPurple = false;

// 	}else{

// 		document.body.style.background = "purple";
// 		//isPurple = true;

// 	}

// 	//instead this would do the same work:

// 	isPurple = !isPurple;
	

// });


b1.addEventListener("click", function(){

	
		document.body.classList.toggle("purple");

});

