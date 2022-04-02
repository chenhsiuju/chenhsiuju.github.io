$(document).ready(function(){
	
  $('#iconDiv').css('display','none');

	$(window).on('scroll resize', function(){
		let scrollTop_h  = $(window).scrollTop();
		
		if (scrollTop_h > 300) {
			$('#iconDiv').fadeIn(800);
		} else {
			$('#iconDiv').fadeOut(500);
		}

	});

  // 點擊，回top
  $('.top').click(function(){
    $('html, body').animate({scrollTop:'0'}, 500);
        return false;
	});

});