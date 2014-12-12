
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
		var hadoukenSound = {
			music: $("#hadouken-sound")[0],
			volume: 0.5,
			pauseIntro: false,
			reload: true
		};
		playMusic(hadoukenSound);
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
			var CoolMusic = {
				music: $("#cool-sound")[0], 
				volume: 0.5,
				pauseIntro: true,
				reload: false
			};	
			playMusic(CoolMusic);
			changeAction(player, "cool-pose");
		}
	})
	.keyup(function(event){
		if(event.keyCode === 88) {
			var coolMusic = {
				music: $("#cool-sound")[0],
			    reload: true
			};
			stopMusic(coolMusic);
			changeAction(player, "still");	
		}
	});

});

function playIntro(){
	introPlaying = true;
	var sfThemeMusic = {
		music: $("#sf-theme")[0], 
		volume: 0.5,
		pauseIntro: false,
		reload: false
	};
	playMusic(sfThemeMusic);
	$(".sf-logo").fadeIn(1200).delay(1000).fadeOut(1000, function() {
		$(".brought-by").fadeIn(1200).delay(1000).fadeOut(1000, function() {
			$(".jquery-logo").fadeIn(1200).delay(1000).fadeOut(1000, function() { 
				$(".instructions").fadeIn(1200); 
			}) 
		}) 
	});
}

function changeAction(player, action) {
	player.removeClass();
	player.addClass(player[0].id + '-' + action);
}

function playMusic(audio) {
	var defaultOptions = {
		music: $("#cool-sound")[0], 
		volume: 0.3,
		pauseIntro: false,
		reload: false
	};

	// Set unspecified values to default values
	audio = $.extend({}, defaultOptions, audio);

	if(introPlaying && audio["pauseIntro"]) { 
		var sfThemeMusic = {
		    music: $("#sf-theme")[0],
		    reload: false
		}
		stopMusic(sfThemeMusic);
		introPlaying = false;
	}
	if(audio["reload"]) { 
		audio["music"].load(); 
	}
	audio["music"].volume = audio["volume"];
	audio["music"].play();
}

function stopMusic(audio) {
	var defaultOptions = {
		music: $("#cool-sound")[0],
		reload: false 
	}

	// Set unspecified values to default values
	audio = $.extend({}, defaultOptions, audio);
	
	audio["music"].pause();
	if(audio["reload"]) {
		audio["music"].load();
	}
}