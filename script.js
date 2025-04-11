jQuery(document).ready(function($) {
	
	let $carousel = $("#carousel"),
		$prev  = $carousel.find(".arrow-prev"),
		$next  = $carousel.find(".arrow-next"),
		$track = $carousel.find(".carousel_track"),
		$items = $carousel.find(".carousel_item"),
		$items_width = $items.outerWidth();

	let $carousel_dots = $("#carousel_dots"),
		$dots = $carousel_dots.find('a');

	let carouselInterval = function(){
		return setInterval(function(){
			$next.trigger('click');
		}, 5000);
	}

	let stopCarouselInterval = function(interval){
		clearInterval(interval);
	}

	let interval = carouselInterval();

	$next.on("click", function(e){
		e.preventDefault();

		stopCarouselInterval(interval);
		interval = carouselInterval();

		let $wrapper 	     = $(this).closest('div'),
			$showed_item     = $wrapper.find('.carousel_item.show'),
			cur_item_index  = $showed_item.index();
			
		let next_item_index = cur_item_index + 1;
		if(next_item_index == $items.length){
			next_item_index = 0;
		}

		$carousel_dots.find('a').removeClass('active');
		$carousel_dots.find('li')
			.eq(next_item_index)
			.find('a')
			.addClass('active');

		let shift = -next_item_index * $items_width;

		$items.removeClass('show');
		$items.eq(next_item_index).addClass('show');

		
		$track.css('transform', 'translateX(' + shift + 'px)');
		// $track.animate({'transform' : 'translateX(' + shift + 'px)'}, 700);


	});

	$prev.on('click', function(e){

		stopCarouselInterval(interval);
		interval = carouselInterval();

		let $wrapper 	     = $(this).closest('div'),
			$showed_item     = $wrapper.find('.carousel_item.show'),
			cur_item_index  = $showed_item.index();

		let prev_item_index = cur_item_index - 1;
		if(prev_item_index < 0){
			prev_item_index = $items.length - 1;
		}

		$carousel_dots.find('a').removeClass('active');
		$carousel_dots.find('li')
			.eq(prev_item_index)
			.find('a')
			.addClass('active');

		let shift = -prev_item_index * $items_width;

		$items.removeClass('show');
		$items.eq(prev_item_index).addClass('show');

		$track.css('transform', 'translateX(' + shift + 'px)');
	});


	
	
	$dots.on('click', function(e){

		stopCarouselInterval(interval);
		interval = carouselInterval();

		$carousel_dots.find('a').removeClass('active');
		$(this).addClass('active');

		let new_item_index = $(this).closest('li').index();

		let shift = -new_item_index * $items_width;

		$items.removeClass('show');
		$items.eq(new_item_index).addClass('show');

		$track.css('transform', 'translateX(' + shift + 'px)');

	});

	let modalTrigger = $('[data-modal]');

	modalTrigger.on("mousedown", function(e){
		let self = $(this),
			target = self.attr('data-modal');

		$(target).toggleClass('show');
	});

	$('.modal_wrapper').on('click', function(e){
		if($(e.target).hasClass('modal_wrapper')){
			$(this).removeClass('show');
		}
	})

});

//Accardion
let acc_btn = $(".accordion_button");
    acc_btn.on("click", function(e){
               let acc_content = $(this).next(),
               acc_content_height = acc_content.prop("scrollHeight");
               $(this).toggleClass('active');
    
    if($(this).hasClass("active")){
        acc_content.css("max-height", acc_content_height);
    }else{
        acc_content.css("max-height", 0);
    }
               });
//jQuery(document).ready(function($) {
	
	
//
//	let modalTrigger = $('[data-modal]');
//
//	modalTrigger.on("mousedown", function(e){
//		let self = $(this),
//			target = self.attr('data-modal');
//
//		$(target).toggleClass('show');
//	});
//
//	$('.modal_wrapper').on('click', function(e){
//		if($(e.target).hasClass('modal_wrapper')){
//			$(this).removeClass('show');
//		}
//	});
//    
//    document.querySelectorAll('.accordion_button').forEach(button =>{
//        button.addEventListener('click', () =>{
//            const accordionContent = button.nextElementSibling;
//            button.classList.toggle('accordion_button-active');
//            
//            if(button.classList.contains('accordion_button-active')) {
//                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//            } else{accordionContent.style.maxHeight = 0;
//                
//            }
//        });
////    });

//});