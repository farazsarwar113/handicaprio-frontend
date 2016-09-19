// Menu Function
jQuery(document).ready(function () {
	jQuery('nav').meanmenu();
});	

//==========================================


// Scroll To Top
jQuery(document).ready(function() {
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.scrollup').fadeIn(duration);
			} 
			else {
				jQuery('.scrollup').fadeOut(duration);
			}
		});
		
	jQuery('.scrollup').click(function(event) {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
	})
});
//==========================================


// Owl BG Slider
$(document).ready(function() {
	var owl = $("#owl-slider-bg");
		owl.owlCarousel({
		navigation : false,
		singleItem : true,
		autoPlay : $(this).data('data-auto-play'),
		transitionStyle : "fade"
	});
});
//==========================================


// Owl Testimonials
$(document).ready(function() {
	$("#owl-testi").owlCarousel({
		navigation : true, // Show next and prev buttons
		autoPlay: 3000,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
});
//==========================================


// Owl Quote
$(document).ready(function() {
	$("#owl-quote").owlCarousel({
		navigation : true, // Show next and prev buttons
		autoPlay: 3000,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
});
//==========================================


// Preety Photo
$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:6000});
});
//==========================================


// Owl Logos
$(document).ready(function() {
  $("#owl-logos").owlCarousel({
	autoPlay: 3000,
	items : 4,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
  });
});
//==========================================


// Map Scroll Off
$(document).ready(function() {
	$('.location-map').click(function () {
		$('.location-map iframe').css("pointer-events", "auto");
	});
	
	$( ".location-map" ).mouseleave(function() {
	  $('.location-map iframe').css("pointer-events", "none"); 
	});
});  
//========================================== 


// Site Pre Loader
jQuery(window).load(function() { // makes sure the whole site is loaded
	jQuery("#status").fadeOut(); // will first fade out the loading animation
	jQuery("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
});
//==========================================