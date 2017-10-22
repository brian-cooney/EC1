

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


  $('.video').parent().click(function () {
      if($(this).children(".video").get(0).paused){
          $(this).children(".video").get(0).play();
          $(this).children(".playpause").fadeOut();
      }else{
         $(this).children(".video").get(0).pause();
          $(this).children(".playpause").fadeIn();
      }
  });
