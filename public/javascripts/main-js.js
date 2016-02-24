// Redirects to menuPage from index page
// OnClick of menu image
$(window).load(function() {
	var image = ['/images/menuBox.jpg'];
	var img = $('#menu');
	//Initial Background image setup
		img.css('background-image', 'url(/images/menuBox.jpg)');
	//Click Function
		$(img).click(function(){
			$(location).attr('href', '/menuPage');
	});
});


// PAGE TRANSITIONS
$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-bottom',
    outClass: 'overlay-slide-out-top',
    inDuration: 500,
    outDuration: 500,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});







// LIGHTBOX
//
//$(document).ready(function() {
//  $('.image-link').magnificPopup({type:'image'});
//});
//
//$('.popup-link').magnificPopup({
//  type: 'image'
//  // other options
//});
//











