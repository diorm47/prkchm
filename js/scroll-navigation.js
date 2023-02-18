// our services navigation

var our_services_block = document.querySelector(".our_services_block");
var scroll_to_services = document.querySelector(".scroll_to_services");

function scrollToServices() {
  our_services_block.scrollIntoView({ behavior: "smooth" });
}
// about us navigation
scroll_to_services.addEventListener("click", scrollToServices);

var digest = document.querySelector(".digest");
var scroll_to_digest = document.querySelector(".scroll_to_digest");

function scrollToDigest() {
  digest.scrollIntoView({ behavior: "smooth" });
}

scroll_to_digest.addEventListener("click", scrollToDigest);

// Scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav_wrapper").style.padding = "10px 0";
  } else {
    document.querySelector(".nav_wrapper").style.padding = "25px 0";
  }
}
