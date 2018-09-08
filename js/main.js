$(document).ready(function(){
	console.log('ready');
	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass('active')

		
        let target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
	});
});

// 針對目前位置對sidebar做出變化
function onScroll(event){
	let scrollPos = $(document).scrollTop();
	console.log('scrollPos', scrollPos)
	$(".list-group>li>a").each(function() {
		let currentLink = $(this);
		let refElement = $(currentLink.attr('href'));
		console.log('refElement.postion', refElement.position().top)
		console.log('refElement.height', refElement.height())
		if(refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos){
			$('.list-group>li>a').removeClass('active');
			currentLink.addClass('active')
		}else{
			currentLink.removeClass('active')
		}
	});
}