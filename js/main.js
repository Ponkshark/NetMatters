
// Carousel

$(document).ready(function(){
      $('.slider-container').slick({
        slidesToShow: 5,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        draggable: true,
        infinite: true,
      });
});
   
// Sticky Nav Bar on Scroll

window.onscroll = function() {
  scroll();
};

var oldScrollY = window.scrollY;
window.onscroll = function() {
  if(oldScrollY < window.scrollY){
    if(window.scrollY > 110){
    document.getElementById("main-header-id").style.top = "-110px";
    document.getElementById("main-nav-id").style.top = "-110px";
    document.getElementById("form-2-main-cont").style.top = "-110px";
    }
  } else {
    document.getElementById("main-header-id").style.top = "0";
    document.getElementById("main-nav-id").style.top = "120px";
    document.getElementById("form-2-main-cont").style.top = "80px";
  }
  oldScrollY = window.scrollY;
}


