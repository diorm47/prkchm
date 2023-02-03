// CAROUSEL-1         //////////////////////
var slideIndex = 1;
function showImage(n) {
  // for Display the first Image

  "use strict";

  var slide = document.getElementsByClassName("case_item_slide"),
    i;

  if (n > slide.length) {
    // to prevent larger values than the slide length

    slideIndex = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    // to make other images dispaly: none

    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";
}
showImage(slideIndex);
function plusIndex(n) {
  // for Next & Prev Actions

  "use strict";

  showImage((slideIndex += n));
}
function currentSlide(n) {
  // for Slide Bullets Selection

  "use strict";

  showImage((slideIndex = n));
}


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn1 = document.querySelector(".btn-open1");
const openModalBtn2 = document.querySelector(".btn-open2");
const openModalBtn3 = document.querySelector(".btn-open3");
const openModalBtn4 = document.querySelector(".btn-open4");
const closeModalBtn = document.querySelector(".btn-close");
const modal_wrapper = document.querySelector(".modal_wrapper");

// close modal function
const closeModal = function () {
  modal_wrapper.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modal_wrapper.classList.remove("hidden");
};
// open modal event
openModalBtn1.addEventListener("click", openModal);
openModalBtn2.addEventListener("click", openModal);
openModalBtn3.addEventListener("click", openModal);
openModalBtn4.addEventListener("click", openModal);