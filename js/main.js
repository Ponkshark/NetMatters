
// Carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 100,
    autoWidth: true,
    autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 8
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

//Collapsible Sidebar

function openNav() {
  document.getElementById("sidebar-inner-id").style.right = "0px";
  document.getElementById("body-id").style.marginRight = "276px";
  document.getElementById("body-id").style.marginLeft = "-276px";
  document.getElementById("body-id").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("sidebar-inner-id").style.right = "-350px";
  document.getElementById("body-id").style.marginRight = "0";
  document.getElementById("body-id").style.marginLeft = "0";
  document.getElementById("body-id").style.overflow = "scroll";
  document.getElementById("body-id").style.overflowX = "hidden";
}

//Cookies

function myFunction() {
  if (!document.cookie.split('; ').find(row => row.startsWith('cookies=accepted'))){ 
    document.getElementById("myDialog").showModal(); 
    document.getElementById("body-id").style.overflow = "hidden";
  }
} 

document.addEventListener("load", myFunction());

function createCookie() {
  document.cookie = "cookies=accepted; max-age=86400; path=/";
  document.getElementById("body-id").style.overflow = "visible";
  document.getElementById("body-id").style.overflowX = "hidden";
}

//Takes window to the top on reload

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

