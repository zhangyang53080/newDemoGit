$(function() {
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		$('.wechat_pop_fx_btn').click(function() {
			$('.wechat_pop_fx').fadeIn();
		})
	} else {
		$('.wechat_pop_fx_btn').hide();
	}
	// 打开侧导航
	$('.menu').click(function() {
		$('.nav').fadeIn();
	})
	// 关闭侧导航
	$('.yj_close,.nav').click(function(event) {
		event.stopPropagation();
		$('.nav').fadeOut();
	});
	$(".nav_wrap").click(function(event) {
		event.stopPropagation();
		$('.nav').fadeIn();
	});
	// 关于我们轮播
	var about_swiper = new Swiper('#about_swiper', {
		loop: true,
		// 如果需要分页器
		pagination: {
			el: '.about-pagination',
		}
	});
	// 关于我们轮播
	var naturehot_swiper = new Swiper('#naturehot_swiper', {
		loop: true,
		// 如果需要分页器
		pagination: {
			el: '.naturehot-pagination',
		}
	});
	// setTimeout(function(){
		
		// var hotel_swiper = new Swiper('.hotel_swiper .swiper-container', {
		// 	centeredSlides: true,
		// 	centeredSlidesBounds: true,
		// 	spaceBetween: '10%',
		// 	slidesOffsetBefore: '40',
		// 	loop: true,
		// 	slidesPerView: 'auto',
		// 	on: {
		// 		slideChangeTransitionEnd: function() {
		// 			// this.slides.transition(this.params.autoplay.delay + this.params.speed).transform('translate3d(-60px, 0, 0)');
		// 		},
		// 		slideChangeTransitionStart: function() {
		// 			// this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
		// 		}
		// 	}
		// });
	// },1000)

	//头部变色
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.header').addClass('on');
		} else {
			$('.header').removeClass('on');
		};
		$('.cs_p').html($(window).scrollTop());
	});
	
	$(".header .back").on('click',function(){
		history.back();
	})

	$('.destination').click(function() {
		$('.ej_nav').fadeIn()
	})
})
