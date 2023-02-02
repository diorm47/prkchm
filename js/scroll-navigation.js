var our_services_block = document.querySelector(".our_services_block");
var scroll_to_services = document.querySelector(".scroll_to_services");

function scrollToServices() {
  our_services_block.scrollIntoView({ behavior: "smooth" });
}

scroll_to_services.addEventListener("click", scrollToServices);

var digest = document.querySelector(".digest");
var scroll_to_digest = document.querySelector(".scroll_to_digest");

function scrollToDigest() {
  digest.scrollIntoView({ behavior: "smooth" });
}

scroll_to_digest.addEventListener("click", scrollToDigest);
