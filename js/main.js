$(document).ready(function(){
	// tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
	//parallax
	$('.parallax-window').parallax({imageSrc: 'image/bg-1.jpg'});
	$('.parallax-window2').parallax({imageSrc: 'image/bg-2.jpg'});
	$('.parallax-window3').parallax({imageSrc: 'image/bg-3.jpg'});
		
	$(document).on("scroll", onScroll);	

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();		
		$(document).off("scroll");

		$('a').each(function() {			
			if($(this).parent().hasClass('nav-item')){
				$(this).parent().removeClass('active')
			}
		})	

		$(this).each(function(){
			if($(this).parent().hasClass('nav-item')){
				$(this).parent().addClass('active')
			}
		})

		let target = this.hash;
		$target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-105
        }, 550, 'swing', function () {
			window.location.hash = target+105;
			// console.log(target)
            $(document).on("scroll", onScroll);
        });
	});	
	
});

// 針對目前位置對sidebar做出變化
function onScroll(event){
	let scrollPos = $(document).scrollTop();
	// console.log('scrollPos', scrollPos)	

	//上方導覽列
	$(".navbar-nav>li>a").each(function() {
		let currentLink = $(this);		
		let refElement = $(currentLink.attr('href'));		
		// console.log('refElement.postion', refElement.offset().top)
		// console.log('refElement.height', refElement.height())
		if(refElement.offset().top <= scrollPos+330 && refElement.offset().top + refElement.height() > scrollPos+330){
			$('.navbar-nav>li').removeClass('active');
			currentLink.parent().addClass('active')
		}else{
			currentLink.parent().removeClass('active')
		}
	});
}
