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

// to form navigations
scroll_to_services.addEventListener("click", scrollToServices);

var form = document.querySelector(".form_object");
var toFormBtn = document.querySelector(".to_form_btn");

function scrollToForm() {
  form.scrollIntoView({ behavior: "smooth" });
}

toFormBtn.addEventListener("click", scrollToForm);
