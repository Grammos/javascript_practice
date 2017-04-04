//isEven 

//var num = prompt("Type a number: ");

function isEven(num)
{
	if(num % 2 === 0){
		return true;
	}
	else {
		return false;
	}
}


function factorial(num)
{
	var result = 1;

	for (var i = 2; i <= num;  i++) {

			result *= i;
		
	}
	return result;

}

function kebabToSnake(str)
{
	var newStr = str.replace(/-/g, "_");
	return newStr;

}



var num = 8; 

function doMath()
{

	num += 1;

	if(num % 5 == 0)
	{
		return true;
	}else{

		return false;
	}


}

num += 1;

doMath();