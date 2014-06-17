$(document).ready(function() {
"use strict";

  // FlexSlider
  $('.slider').flexslider({
    animation: 'slide',
    selector: '.slides > li',
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 3600,
    animationSpeed: 1200,
    prevText: '',
    nextText: ''
  });

  // Clock
  $('.clock').countdown('2014/07/16').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div>%D<br><span>day%!d</span></div>'
    + '<div>%H<br><span>hour%!H</span></div>'
    + '<div>%M<br><span>minute%!M</span></div>'
    + '<div>%S<br><span>second%!S</span></div>'));
  });

  // Parallax effect
  $('.header').parallax("50%", 0.2);

});