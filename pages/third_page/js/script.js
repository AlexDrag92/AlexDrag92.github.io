function showMenu(){
	$('.menuButton').css('background', '#FFFAFA');
	$('.close').css('opacity', '1');
	$('.show').css('opacity', '0');
	$('header nav').fadeIn(400);
};

function closeMenu(){
	$('.menuButton').css('background', '#911E42');
	$('.close').css('opacity', '0');
	$('.show').css('opacity', '1');
	$('header nav').fadeOut(400);
}

$('.menuButton').click(function(){
	if($('header nav').is(':visible')){
		closeMenu();
	}else{
		showMenu();
	}
});

$(window).resize(function(){
	if($(window).width()>480){
		$('header nav').css('display', 'block');
	}else{
		closeMenu();
	}
	
});