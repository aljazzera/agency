$(".about-tabs__content-text").not(":first").hide();
$(".about-tabs__wrapper .about-tabs__item").click(function() {
	$(".about-tabs__wrapper .about-tabs__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".about-tabs__content-text").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

// Isotop filters
$( document ).ready(function() {
    var $container = $('.works-grid');
    // filter buttons
    $('#filters button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.works-item', filter: selector });
      return false;
    });    
});

// BURGER
$(function() { 
    $('.header-nav__burger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header-nav__burger__active');
        $('.header-nav__link').toggleClass('nav-link__active');
      });
    });

// form
$(document).ready(function() {
  $('form').submit(function() {
      $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
      }).done(function() {
      alert('Спасибо!');

      setTimeout(function() {
          console.log('функция по таймеру');
          $('form').trigger('reset');
          }, 1000);
      });
      return false;
  });
});

// scroll
$(document).ready(function(){
  $('a[href*="#"]').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
});