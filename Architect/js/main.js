$(document).on('click', 'a[href^="#"]', function (e) {
      e.preventDefault();

      $('html, body').stop().animate(
            {
                  scrollTop: $($(this).attr('href')).offset().top
            },
            750,
            'linear'
      )
})


$(document).ready(function () {
      
      $(window).scroll(function () {
            if ($(this).scrollTop() > $('#p-clients').offset().top) {
                  $('.scroll-to-top').addClass('show');
            } else {
                  $('.scroll-to-top').removeClass('show');
            }
      });

      $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
      });

});


$(document).ready(function() {
      $('.slide-to-hide').click(function() {
            $('.top-rated-hot-news').slideToggle(1000);
      })
})