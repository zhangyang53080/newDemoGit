//loading
$(function() {
	var img = $("img"); //首先获取所有的Img对象
	var num = 0; //定义一个变量，赋值给b标签用
	img.each(function(i) { //遍历获取到的所有img
		var oImg = new Image(); //new一个新对象
		oImg.onload = function() { //使用onload方法，在加载完成后执行
			oImg.onload = null; //首先清除掉缓存
			num++; //每次加载的过程中num++，即执行次数
			console.log(num)
			$(".loading_porss em").css({
				'width': 'calc(' + parseInt(num / $("img").length * 95) + "% - .04rem)"
			}); //改变b标签的内容，用num除以img的个数，再乘以100，再取整，这就是加载的百分数
			if (num >= i) {

			}
		}
		oImg.src = img[i].src; //预加载，先指定一个img.src，当onload成功以后可以将数据指定到某一个元素或者图片上，或者返回一个结果
	});

	var my_swiper = new Swiper('.my_swiper .swiper-container', {
		centeredSlides: true,
		centeredSlidesBounds: true,
		spaceBetween: '14%',
		slidesOffsetBefore: '40',
		loop: true,
		slidesPerView: 'auto',
		on: {
			slideChangeTransitionEnd: function() {
				// this.slides.transition(this.params.autoplay.delay + this.params.speed).transform('translate3d(-60px, 0, 0)');
			},
			slideChangeTransitionStart: function() {
				// this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
			}
		}
	});


	var card_swiper = new Swiper('.card_swiper .swiper-container', {
		// loop: true,
		loopAdditionalSlides : 1,
		centeredSlides: true,
		centeredSlidesBounds: true,
		spaceBetween: '14%',
		slidesOffsetBefore: '40',
		slidesPerView: 'auto',
		on: {
			transitionEnd: function(swiper) {
				this.active = $('.swiper-slide-active').attr('data-swiper-slide-index');
				var sum = this.realIndex
				$(".card_nav span").removeClass('hover').eq(sum).addClass('hover');
			}
		}
	})
	
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
	
	
	$(".card_nav span").on('click',function(){
		var index = $(this).index();
		 card_swiper.slideToLoop(index, 1000, false);//切换到第一个slide，速度为1秒
	})

	// 第一个导航下的轮播
	$(".first>div").hide().eq(0).show();
	$(".first_nav .nav_box span").on('click', function() {
		var index = $(this).index();
		$(".first_nav .nav_box span").removeClass('hover');
		$(this).addClass('hover');
		$(".first>div").hide().eq(index).show();
	})

	// 第二个导航下的轮播
	$(".er_swier>div").hide().eq(0).show();
	$(".first_nav .er_nav span").on('click', function() {
		var index = $(this).index();
		$(".first_nav .er_nav span").removeClass('hover');
		$(this).addClass('hover');
		$(".er_swier>div").hide().eq(index).show();
	})
	setTimeout(function(){
		$.fn.fullpage.reBuild();
	},1000)
})
document.addEventListener("WeixinJSBridgeReady", function() {
	audio.play();
	audio.pause();
}, false);
var showIndex = $('.swiper_re_b ul li.active').index();
$('.swiper_re_c>div').eq(showIndex).show();
$('.swiper_re_b ul li a').click(function() {
	$('.swiper_re_b ul li').removeClass('active');
	$(this).closest('li').addClass('active');
	$('.swiper_re_c>div').hide();
	$('.swiper_re_c>div').eq($(this).closest('li').index()).show();
	$.fn.fullpage.reBuild();
})

var canvas = document.getElementById('video-canvas');
var audio = document.getElementById('audio');
var url = $("#swiper_video").attr("data-video");
var ua = window.navigator.userAgent.toLowerCase();
// window.addEventListener('touchmove', func, { passive: false })
var player = new JSMpeg.Player(url, {
	canvas: canvas,
	progressive: false,
	loop: true,
	onEnded: function() {},
	onSourceCompleted: function() {
		// $(".loading_porss em").css({
		// 	'width': "calc(100% - .04rem)"
		// });
		// $(".loading").fadeOut(); //当num的值大于等于个数时隐藏
		$('.s_h').show();
	}
});
if (ua.match(/MicroMessenger/i) == 'micromessenger') {
	$('.video_music').addClass('play');
	$('.video_music').removeClass('pause');

	//--创建页面监听，等待微信端页面加载完毕 触发音频播放
	document.addEventListener('DOMContentLoaded', function() {
		function audioAutoPlay() {
			audio.play();
			document.addEventListener("WeixinJSBridgeReady", function() {
				audio.play();
			}, false);
			if (audio.play()) {
				player.play();
				$("#fullpage").fullpage({
					scrollOverflow: true,
					touchSensitivity: 20,
					afterLoad: function(anchorLink, index) {
						
						if (index == 1) {
							// $('.header').fadeOut();
							$('.bt_fix').removeClass('active');
							player.play();
							audio.play();
							if ($('.video_music').hasClass('play')) {
								audio.play();
							} else {
								audio.pause();
							}
						}
						if (index == 2) {
							// $('.header').fadeIn();
							$('.bt_fix').addClass('active');
							player.pause();
							audio.pause();

						}
					},
					onLeave: function(index, nextIndex, direction) {
						if (nextIndex == 2) {
							player.pause();
						}
					}
				});
			}

		}
		audioAutoPlay();
	});
	$('._re_b_more').click(function() {
		$('.swiper_re_b li').slideDown();
		$('.swiper_re_b ul').addClass('active');
		$.fn.fullpage.reBuild();
	})
} else {
	$('.video_music').addClass('pause');
	$('.video_music').removeClass('play');
	player.play();
	$("#fullpage").fullpage({
		scrollOverflow: true,
		autoScrolling: true,
		touchSensitivity: 20,
		afterLoad: function(anchorLink, index) {
			console.log(index)
			if (index == 1) {
				$('.header').fadeOut();
				$('.bt_fix').removeClass('active');
				player.play();
				if ($('.video_music').hasClass('play')) {
					audio.play();
				} else {
					audio.pause();
				}
			}
			if (index == 2) {
				$('.header').fadeIn();
				$('.bt_fix').addClass('active');
				player.pause();
				audio.pause();
			}
		},
		onLeave: function(index, nextIndex, direction) {
			if (nextIndex == 2) {
				player.pause();
			}
		}
	});
	$('._re_b_more').click(function() {
		$('.swiper_re_b li').slideDown();
		$('.swiper_re_b ul').addClass('active');
		$.fn.fullpage.reBuild();
	})
}
$('.video_music').click(function() {
	if ($(this).hasClass('play')) {
		$(this).addClass('pause');
		$(this).removeClass('play');
		audio.pause();
	} else if ($(this).hasClass('pause')) {
		$(this).addClass('play');
		$(this).removeClass('pause');
		audio.play();
	}
})
