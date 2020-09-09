// check off specific todos by clicking
$("li").click(function() {
	$(this).toggleClass("completed");
});

// click on x to delete todos
$("span").click(function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		const todoText = $(this).val();
		$(this).val("");
		$("ul").append(`<li><span>X</span> ${todoText}</li>`);	
	}
});