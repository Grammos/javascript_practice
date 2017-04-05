// Check off specific Todos by clicking 
$("li").click(function(){
  $(this).toggleClass("completed");	
});

//Click on X to delete Todos
$("span").click(function(event){
  $(this).parent().fadeOut(500, function(){
  	//delete the li not the span!
  	$(this).remove();
  });
 //it would fire to the span but not continue on the other events!
 //so would stop the "bubble up" effect.
  event.stopPropagation();
});

