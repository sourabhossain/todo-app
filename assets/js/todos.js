// completed todo
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// remove todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

	event.stopPropagation();
});

// add new todo
$("input[type='text']").keypress(function(event) {
	
	if (event.which === 13) {
		const todoText = $(this).val().trim();

		if (todoText !== "") {
		    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
		}	

		$(this).val("");
	}
});

// input box toggle
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});