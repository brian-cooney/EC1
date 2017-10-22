

$(document).ready(function(){
$('.main-gallery-carousel').slick({
dots: true
});
});


  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
