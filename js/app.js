$(document).ready(function(){
	$(".ryu-container").on("mouseenter", function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();		
	});	
});