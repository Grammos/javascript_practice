var age = prompt("How old are u?");

// if age if negative
if(age < 0)
{
	console.log("Sorry, you're not old enough to enter the venue");
}

// if age if 21
if(age === 21)
{
	console.log("Happy 21st);
}


// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}


// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}