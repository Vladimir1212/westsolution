$(function() {
    $('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<span class="priv_arrow"><img src="img/prev.png"></span>',
  nextArrow: '<span class="next_arrow"><img src="img/next.png"></span>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      }
    }
  ]
});
})


