$(document).ready(function(){
	// tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	$('.parallax-window').parallax({imageSrc: 'image/bg-1.jpg'});
	console.log('ready');
	$(document).on("scroll", onScroll);
	

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();		
		$(document).off("scroll");

		$('a').each(function() {
			// $(this).removeClass('active');
			if($(this).parent().hasClass('nav-item')){
				$(this).parent().removeClass('active')
			}
		})
		// $(this).addClass('active')

		$(this).each(function(){
			if($(this).parent().hasClass('nav-item')){
				$(this).parent().addClass('active')
			}
		})

		let target = this.hash;
		$target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 550, 'swing', function () {
			window.location.hash = target+100;
			console.log(target)
            $(document).on("scroll", onScroll);
        });
	});	
	
});

// 針對目前位置對sidebar做出變化
function onScroll(event){
	let scrollPos = $(document).scrollTop();
	// console.log('scrollPos', scrollPos)
	//側選單
	// $(".list-group>li>a").each(function() {
	// 	let currentLink = $(this);
	// 	let refElement = $(currentLink.attr('href'));
	// 	console.log('refElement.postion', refElement.position().top)
	// 	console.log('refElement.height', refElement.height())
	// 	if(refElement.position().top <= scrollPos-600 && refElement.position().top + refElement.height() > scrollPos-600){
	// 		$('.list-group>li>a').removeClass('active');
	// 		currentLink.addClass('active')
	// 	}else{
	// 		currentLink.removeClass('active')
	// 	}
	// });

	//上方導覽列
	$(".navbar-nav>li>a").each(function() {
		let currentLink = $(this);
		let refElement = $(currentLink.attr('href'));
		console.log('refElement.postion', refElement.position().top)
		console.log('refElement.height', refElement.height())
		if(refElement.position().top <= scrollPos-600 && refElement.position().top + refElement.height() > scrollPos-600){
			$('.navbar-nav>li').removeClass('active');
			currentLink.parent().addClass('active')
		}else{
			currentLink.parent().removeClass('active')
		}
	});
}
