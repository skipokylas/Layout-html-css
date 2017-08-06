$(document).ready(function() {
    $('.menu-burger').click(function(){
    	$('nav ul').slideToggle(500);
    });
    $(window).resize(function(){
    	if($(window).width()> 890){
    		$('nav ul').removeAttr('style');
    	}
    })
});