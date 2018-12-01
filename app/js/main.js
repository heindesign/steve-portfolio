/* header fixed */

var nav_offset_top = $("header").height() + 70;

function navbarFixed() {
	if ($(".header").length) {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= nav_offset_top) {
				$(".header").addClass("fixed");
			} else {
				$(".header").removeClass("fixed");
			}
		});
	}	
}

navbarFixed();

/**/



/* owl carousel */

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000
	});
});

/**/



/* isotope */

$(window).on("load", function() {
	$(".sort-by__item").on("click", function() {
		$(".sort-by__item").removeClass("active");
		$(this).addClass("active");

		var data = $(this).attr("data-filter");
		$workGrid.isotope({
			filter: data
		});
	});
	if (document.getElementById("work")) {
		var $workGrid = $(".projects").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".grid-sizer"
			}
		});
	}
});

/**/