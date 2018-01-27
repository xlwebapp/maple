$(document).ready(function(){
	var loader = "<div class='mapleLoader'></div>";
	$("body").append(loader);
	$(window).load(function(){
		$("body .mapleLoader").fadeOut(500);
		setTimeout(function(){
			if($("body .mapleLoader").is(':hidden')){
				$("body .mapleLoader").remove();
			}
		}, 550);
	});
	$('.navbar-toggle').click(function() {
				$(this).toggleClass('active');
			  });
	$(".testimonial-carousel").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 3000,
        paginationSpeed: 400,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        navigationText: ["<i class=' icon-back-7'></i>", "<i class=' icon-next-10'></i>"],
        addClassActive: true
        

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
	
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();    
		if (scroll > 50) {
			$(".fixedHeaderNav").addClass("fixedScroll");
		} else {
			$(".fixedHeaderNav").removeClass("fixedScroll")
		}
	});
});