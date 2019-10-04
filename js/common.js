

$(document).ready(function() {
	$("a[href='#top']").click(function() {
    	$("html, body").animate({scrollTop: 0}, 500);
	});
	var $btnTop= $(".scrolltop");
	$(window).on('scroll',function(){
    	if($(window).scrollTop() >= 20){
        	$btnTop.fadeIn()
    	}else{
        	$btnTop.fadeOut();
    	}
	});
});