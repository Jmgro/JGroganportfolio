//check off specifics Todos by Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete Todos
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
       //grabbing new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul 
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
