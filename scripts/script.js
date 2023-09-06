$(function () {
  $('.white_btn').click(function () {
    $('.popup').addClass('_active');
    $('.background').addClass('_active');
  });
  $('.background').click(function () {
    $('.popup').removeClass('_active');
    $('.background').removeClass('_active');
  });

  $('.menu_burger').click(function () {
    $('.menu').toggleClass('_active');
  });
  $('.slider_company_container>.slider_body').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    prevArrow: $('.slider_company_prev'),
    nextArrow: $('.slider_company_next')
  });

  $('.future_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    prevArrow: $('.future_slider_prev'),
    nextArrow: $('.future_slider_next')
  });
});
