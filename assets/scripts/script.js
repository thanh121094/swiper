(function ($, window, document, undefined) {
  var headerHandler = {
    init: function () {
      // back to top 
      $('.logo').on('click', function(e) {
        e.preventDefault();
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
        $('html, body').animate({
          scrollTop: 0
        }, 750, 'easeInOutQuad')
      });

      // smooth scroll between sections
      $('a[href^="#"]').on('click', function(event) {

        var $target = $(this.getAttribute('href'));

        if($target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: $target.offset().top
          }, 750, 'easeInOutQuad');
        }
      });

      // TOGGLE HAMBURGER & COLLAPSE NAV
      $('.nav-toggle').on('click', function() {
        $(this).toggleClass('open');
        $('.menu-left').toggleClass('collapse');
      });
      // REMOVE X & COLLAPSE NAV ON ON CLICK
      $('.menu-left a').on('click', function() {
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
      });
    }
  };

  var swiperHandler = {
    init: function () {
      var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    }
  }

  var countDownHandler = {
    init: function () {
      var sdt = new Date('2019-4-10 00:00:00');
      var difdt = new Date(sdt - new Date());
      var yearsDisplay = (difdt.toISOString().slice(0, 4) - 1970);
      var months = (difdt.getMonth()+1);
      var days = difdt.getDate();
      var hours = difdt.getHours();
      if (yearsDisplay <= 0) {
        $('.years').css('display', 'none');
      }
      $('.months strong').text(months);
      $('.days strong').text(days);
      $('.hours strong').text(hours);
    }
  }
  // please modulize your functions so we can reuse/turn on & off easily
  $(document).ready(function () {
    headerHandler.init();
    swiperHandler.init();
    countDownHandler.init();
  });

})(jQuery, window, document);
