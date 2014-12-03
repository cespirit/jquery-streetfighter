$(document).ready(function(){
	playIntro();

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

function playIntro(){
	$("#sf-theme")[0].volume = 0.5;
	$("#sf-theme")[0].play();

	$(".sf-logo").fadeIn(1200);
	$(".sf-logo").delay(1000).fadeOut(1000);
	$(".brought-by").fadeIn(1200);
	$(".brought-by").delay(1000).fadeOut(1000);
	$(".jquery-logo").fadeIn(1200);
	$(".jquery-logo").delay(1000).fadeOut(1000);

}

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}

function playCool(){
	$("#sf-theme")[0].pause();
	$("#cool-sound")[0].volume = 0.5;	
	$("#cool-sound")[0].play();
}

function stopCool() {
	$("#cool-sound")[0].pause();
	$("#cool-sound")[0].load();
}