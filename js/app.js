$(document).ready(function(){
	
	$(".ryu-container").mouseenter(function(){
		$(".ryu-cool").hide();
		$(".ryu-still").hide();
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-cool").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();
		$(".ryu-still").show();		
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-cool").hide();
		$(".ryu-ready").hide();
		$(".ryu-still").hide();			
		$(".ryu-throwing").show();	
		$(".hadouken").finish().show()
		.animate(
		    {"left": "300px"},
		    500,
		    function() {
		    	$(this).stop();		
		    	$(this).hide();
		    	$(this).css("left", "-212px");
		    }
		);		
	})
	.mouseup(function(){
		$(".ryu-cool").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();
		$(".ryu-still").show();
	});
	
	$(document).keydown(function(event){
		if(event.keyCode === 88) {		
			playCool();
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
		}
	}).keyup(function(event){
		if(event.keyCode === 88) {
			stopCool();
			$(".ryu-cool").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-still").show();		
		}
	});

});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playCool(){
	$('#cool-sound')[0].volume = 0.5;	
	$('#cool-sound')[0].play();
}

function stopCool() {
	$('#cool-sound')[0].pause();
	$('#cool-sound')[0].load();
}