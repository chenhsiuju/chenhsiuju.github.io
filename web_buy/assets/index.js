$(document).ready(function(){

	$(window).on('scroll resize', function(){
		var scrollTop_h  = $(window).scrollTop();
		var window_w = $(window).width();
		var window_h = $(window).height();

		if(window_w >= 992){
			$('.navlist').css('display','flex');
			$('.barsBTN, .closeBTN').hide();
		}else{
			$('.navlist').css('display','none');
			$('.barsBTN').show();
		}
		
		if(window_w < 992 && scrollTop_h > 0){
			$('.navlist, .closeBTN').hide();
			$('.barsBTN').show();
		}

		if(window_w >= 992 && scrollTop_h > 90) {
			$('#header').addClass('headerMini');
			$('.logo img').css('height','40');
		} else {
			$('#header').removeClass('headerMini');
			$('.logo img').css('height','45');
		}
		
		if (scrollTop_h > 300) {
			$('.iconDIV').fadeIn(800);
		} else {
			$('.iconDIV').fadeOut(500);
		}

		// 捲動軸接近目的地，區塊滑入
		$('#about, #meal, #advideo, #contact .container').css('opacity','0');
		$('#about, #meal, #advideo, #contact .container').each(function(){
			var objTop_h  = $(this).offset().top;
			
			if(scrollTop_h + window_h > objTop_h ){
			$(this).addClass('animate__animated animate__slideInLeft');
				$(this).css('opacity','1');
			}else{
				$(this).removeClass('animate__animated animate__slideInLeft');
			}
		});
	});

	// bar按鈕
	$('.barsBTN').click(function(){
		$('.navlist').slideDown(600);
		$(this).hide();
		$('.closeBTN').show();
		return false;
	});

	// close按鈕
	$('.closeBTN').click(function(){
		$('.navlist').slideUp(600);
		$(this).hide();
		$('.barsBTN').show();
		return false;
	});

	// 點擊連結下滑到該區塊
	$('header .navlink').click(function() {
		var header_h = $('#header').height();
		var target = $(this).attr('click-target');
		var h = $(target).offset().top;
		$('html, body').animate({ scrollTop: h-header_h },600,'easeOutBounce');
	});

    // 點擊，回top
    $('.top, a.logo').click(function(){
		$('html, body').animate({scrollTop:'0'}, 300);
        return false;
	});

});