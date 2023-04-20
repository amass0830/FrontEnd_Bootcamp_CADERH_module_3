$(document).ready(function() {
  $('.carousel-inner .product-card:first').addClass('active');
  $('.carousel-indicators li:first').addClass('active');
  $('.carousel-indicators li').click(function() {
    var index = $(this).data('slide-to');
    $('.carousel-indicators li').removeClass('active');
    $(this).addClass('active');
    $('.carousel-inner .product-card').removeClass('active');
    $('.carousel-inner .product-card:eq(' + index + ')').addClass('active');
  });

  $('#myCarousel').carousel({
    interval: 5000 
  });
});
