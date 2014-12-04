$(document).ready(function() {	
	var introPlaying = false;
	var player = $("#ryu");
	playIntro();

	player.mouseenter(function(){
		changeAction(player, "ready");
	})
	.mouseleave(function(){
		changeAction(player, "still");
	})
	.mousedown(function(){
		playMusic($("#hadouken-sound")[0], 0.5, false, true)
		changeAction(player, "throwing");
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
		changeAction(player, "still");
	});

	$(document).keydown(function(event){
		if(event.keyCode === 88) {		
			playMusic($("#cool-sound")[0], 0.5, true, false)
			changeAction(player, "cool-pose");
		}
	})
	.keyup(function(event){
		if(event.keyCode === 88) {
			stopMusic($("#cool-sound")[0]);
			changeAction(player, "still");	
		}
	});

});

function playIntro(){
	introPlaying = true;
	playMusic($("#sf-theme")[0], 0.5, false, false);
	$(".sf-logo").fadeIn(1200).delay(1000).fadeOut(1000);
	$(".brought-by").delay(3300).fadeIn(1200).delay(1000).fadeOut(1000);
	$(".jquery-logo").delay(6600).fadeIn(1200).delay(1000).fadeOut(1000);
	$(".instructions").delay(9900).fadeIn(1200);
}

function changeAction(player, action) {
	player.removeClass();
	player.addClass(player[0].id + '-' + action);
}

function playMusic(audio, vol, pauseIntro, reload) {
	if(introPlaying && pauseIntro) { 
		$("#sf-theme")[0].pause(); 
		introPlaying = false;
	}
	if(reload) { 
		audio.load(); 
	}
	audio.volume = vol;
	audio.play();
}

function stopMusic(audio) {
	audio.pause();
	audio.load(); 
}