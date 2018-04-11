/*/////////////////////---------------------SLIDER--------------////////////////////////*/

var currentImgSrc = 'img/big/city1.jpg';
var preloadImgs = new Array();

$('.previews img').each(function(){
	preloadImgs.push('img/big/'+$(this).attr('src').substring(4));
});

/*----Prewies-slider-----------*/
$('.previews img').click(function(){
	if($('.mainImg').attr('src') != 'img/big/'+$(this).attr('src').substring(4)){
		this.style.filter = 'blur(1px)';

		$('.mainImg').hide().attr('src', 'img/big/'+$(this).attr('src').substring(4)).ready(function () {
			$('.mainImg').fadeIn(500);
		});
	};

	currentImgSrc = 'img/big/'+$(this).attr('src').substring(4);

	$('.previews img').each(function(){
		$(this).css('filter', 'blur(0px)');
	});

	$(this).css('filter', 'blur(1px)');

	for (var i = 0; i < preloadImgs.length; i++) {
		if($('.mainImg').attr('src') == preloadImgs[i]){
			currentImgSrc = preloadImgs[i];
			imgIndx = i;
		};
	};
});
/*-------------------------------*/

/*----Arrows-----slider----------*/

var imgIndx = 0;

//right arrow
$('.nex').click(function(){
	if(imgIndx<preloadImgs.length-1){
		$('.mainImg').hide().attr('src', preloadImgs[++imgIndx]).ready(function () {
			$('.mainImg').fadeIn(500);
		});
	}else{
		$('.mainImg').attr('src', preloadImgs[0]);
		$('.mainImg').hide().attr('src', preloadImgs[0]).ready(function(){
			$('.mainImg').fadeIn(200);
		});
		imgIndx = 0;
	};
	$('.previews img').each(function() {
		if('img/big/'+$(this).attr('src').substring(4) == $('.mainImg').attr('src')){
			$('.previews img').css('filter', 'blur(0px)');
			$(this).css('filter', 'blur(1px)');
		};
	});
});

//left arrow
$('.prev').click(function(){
	if(imgIndx != 0){
		$('.mainImg').hide().attr('src', preloadImgs[--imgIndx]).ready(function () {
			$('.mainImg').fadeIn(200);
		});
	}else{
		$('.mainImg').hide().attr('src', preloadImgs[preloadImgs.length-1]).ready(function(){
			$('.mainImg').fadeIn(200);
		});
		imgIndx = preloadImgs.length-1;
	};
	$('.previews img').each(function() {
		if('img/big/'+$(this).attr('src').substring(4) == $('.mainImg').attr('src')){
			$('.previews img').css('filter', 'blur(0px)');
			$(this).css('filter', 'blur(1px)');
		};
	});
});
/*/////////////////////-----------------AND----SLIDER--------------////////////////////////*/

/*---Columns-height----function- (page must refresh)*/

function oneHeihgtColumn(cols){
	var maxHeightCol = 0;

	if($(window).width()>768){
		cols.each(function(){  
			if($(this).height() > maxHeightCol){  
				maxHeightCol = $(this).height();
			};
		});   
		cols.each(function(){
			$(this).css('height', maxHeightCol+'px')
		});
	}else{
		cols.each(function(){
			$(this).css('height', 'auto');
		});
	};
};
/*-------------------------------*/

$(document).ready(function () {
	oneHeihgtColumn($('.sec'));
});//ready

$(window).resize(function(){
	oneHeihgtColumn($('.sec'));

	if($(this).width()>768){
		$('.headerNav').css('right', '0px');
	}else{
		$('.headerNav').css('right', '100%');
	}
	
});

/*----------close--button-----------*/


$('.headerNav').append('<span class="closeButton">close</span>');
$('.closeButton').click(function () {
	$('.headerNav').css('right', '100%');
});

$('.headerWrapper').append('<span class="showMenu">menu</span>');
$('.showMenu').click(function () {
	$('.headerNav').css('right', '0px');
});



