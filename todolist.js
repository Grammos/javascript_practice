var todos = ["Hello from me"];
var input = prompt("What would you like to do?");


while(input !== "quit")
{
	if(input === "list")
	{
	 
	  listTodos();

	} else if(input === "new") 
	{
	   addTodo();
		
	} else if(input === "delete") 
	{
		deleteTodo();
	}
	var input = prompt("What would you like to do?");



}console.log("OK, you're done!");

function listTodos()
{
	console.log("*****************");
	todos.forEach(function(todo, i){
	   	 console.log(i + " : " + todo);

	});
	console.log("*****************");

}

function addTodo()
{
	var newTodo = prompt("Enter new todo");

	todos.push(newTodo);
	console.log("Item added");

}

function deleteTodo()
{
	var index = prompt("Enter index of todo to delete");
	//delete that todo
       //splice()
     todos.splice(index, 1);

    console.log("Item deleted");
}


