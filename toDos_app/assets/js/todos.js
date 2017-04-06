// Check off specific Todos by clicking 
$("ul").on("click", "li",  function(){
  $(this).toggleClass("completed");	
});

//Click on X to delete Todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
  	//delete the li not the span!
  	$(this).remove();
  });
 //it would fire to the span but not continue on the other events!
 //so would stop the "bubble up" effect.
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
  	//grabbing new todo text from input
     var todoText = $(this).val();
     $(this).val("");
     //create a new li and add to ul
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-pencil").click(function(){
  $("input[type='text']").fadeToggle();
});

