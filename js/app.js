$(document).ready(function(){
	$(".ryu-container").on("mouseenter", function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();		
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-still").hide();	/*	For the case when mouseup but no mouseenter again to hadouken since .finish() didn't work for me completely */
		$(".ryu-throwing").show();	
		$(".hadouken").finish().show()
		.animate(
		    {"left": "300px"},
		    500,
		    function() {
		    	$(this).hide();
		    	$(this).css("left", "-212px");
		    }
		);		
	})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-still").show();
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}