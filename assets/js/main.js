/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $('body');

  // Breakpoints.
  breakpoints({
    wide: ['1281px', '1680px'],
    normal: ['981px', '1280px'],
    narrow: ['841px', '980px'],
    narrower: ['737px', '840px'],
    mobile: ['481px', '736px'],
    mobilep: [null, '480px'],
  });

  var slidePosition = 0;
  SlideShow(slidePosition);

  function SlideShow() {
    var i;
    var slides = document.getElementsByClassName('Containers');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slidePosition++;
    if (slidePosition > slides.length) {
      slidePosition = 1;
    }
    slides[slidePosition - 1].style.display = 'block';
    setTimeout(SlideShow, 4000); // Change image every 3 seconds
  }

  var reviewPosition = 0;
  ReviewShow(reviewPosition);

  function ReviewShow() {
    var i;
    var reviews = document.getElementsByClassName('ReviewContainers');
    for (i = 0; i < reviews.length; i++) {
      reviews[i].style.display = 'none';
    }
    reviewPosition++;
    if (reviewPosition > reviews.length) {
      reviewPosition = 1;
    }
    reviews[reviewPosition - 1].style.display = 'block';
    setTimeout(ReviewShow, 4000); // Change image every 3 seconds
  }

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });
})(jQuery);
