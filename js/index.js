var slideIndex = 1;
// CAROUSEL-1         /////////////
function showImage(n) {
  // for Display the first Image

  "use strict";

  var slide = document.getElementsByClassName("slides"),
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

// CAROUSEL-2  ////////////////////////////
var slideIndex2 = 1;
function showImage2(n) {
  // for Display the first Image

  "use strict";

  var slide2 = document.getElementsByClassName("slides2"),
    i;

  if (n > slide2.length) {
    // to prevent larger values than the slide length

    slideIndex2 = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndex2 = slide2.length;
  }

  for (i = 0; i < slide2.length; i++) {
    // to make other images dispaly: none

    slide2[i].style.display = "none";
  }
  slide2[slideIndex2 - 1].style.display = "block";
}
showImage2(slideIndex2);
function plusIndex2(n) {
  // for Next & Prev Actions

  "use strict";

  showImage2((slideIndex2 += n));
}
function currentSlide2(n) {
  // for Slide Bullets Selection

  "use strict";

  showImage2((slideIndex2 = n));
}

// CAROUSEL-3  ////////////////////////////
var slideIndex3 = 1;

function showImage3(n) {
  // for Display the first Image

  "use strict";

  var slide3 = document.getElementsByClassName("slides3"),
    i;

  if (n > slide3.length) {
    // to prevent larger values than the slide length

    slideIndex3 = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndex3 = slide3.length;
  }

  for (i = 0; i < slide3.length; i++) {
    // to make other images dispaly: none

    slide3[i].style.display = "none";
  }
  slide3[slideIndex3 - 1].style.display = "block";
}

showImage3(slideIndex3);

function plusIndex3(n) {
  // for Next & Prev Actions

  "use strict";

  showImage3((slideIndex3 += n));
}

function currentSlide3(n) {
  // for Slide Bullets Selection

  "use strict";

  showImage3((slideIndex3 = n));
}

// CAROUSEL-4  ////////////////////////////
var slideIndex4 = 1;

function showImage4(n) {
  // for Display the first Image

  "use strict";

  var slide4 = document.getElementsByClassName("slides4"),
    i;

  if (n > slide4.length) {
    // to prevent larger values than the slide length

    slideIndex4 = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndex4 = slide4.length;
  }

  for (i = 0; i < slide4.length; i++) {
    // to make other images dispaly: none

    slide4[i].style.display = "none";
  }
  slide4[slideIndex4 - 1].style.display = "block";
}

showImage4(slideIndex4);

function plusIndex4(n) {
  // for Next & Prev Actions

  "use strict";

  showImage4((slideIndex4 += n));
}

function currentSlide4(n) {
  // for Slide Bullets Selection

  "use strict";

  showImage4((slideIndex4 = n));
}

// CAROUSEL-5  ////////////////////////////
var slideIndex5 = 1;

function showImage5(n) {
  // for Display the first Image

  "use strict";

  var slide5 = document.getElementsByClassName("slides5"),
    i;

  if (n > slide5.length) {
    // to prevent larger values than the slide length

    slideIndex5 = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndex5 = slide5.length;
  }

  for (i = 0; i < slide5.length; i++) {
    // to make other images dispaly: none

    slide5[i].style.display = "none";
  }
  slide5[slideIndex5 - 1].style.display = "block";
}

showImage5(slideIndex5);

function plusIndex5(n) {
  // for Next & Prev Actions

  "use strict";

  showImage5((slideIndex5 += n));
}

function currentSlide5(n) {
  // for Slide Bullets Selection

  "use strict";

  showImage5((slideIndex5 = n));
}

// CAROUSEL-View  ////////////////////////////
var slideIndexView = 1;

function showImageView(n) {
  // for Display the first Image

  "use strict";

  var slideView = document.getElementsByClassName("questions_slider"),
    i;

  if (n > slideView.length) {
    // to prevent larger values than the slide length

    slideIndexView = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndexView = slideView.length;
  }

  for (i = 0; i < slideView.length; i++) {
    // to make other images dispaly: none

    slideView[i].style.display = "none";
  }
  slideView[slideIndexView - 1].style.display = "block";
}

showImageView(slideIndexView);

function plusIndexView(n) {
  // for Next & Prev Actions

  "use strict";

  showImageView((slideIndexView += n));
}

function currentSlideView(n) {
  // for Slide Bullets Selection

  "use strict";

  showImageView((slideIndexView = n));
}

// CAROUSEL-Reacommendations  ////////////////////////////
var slideIndexRec = 1;

function showImageRec(n) {
  // for Display the first Image

  "use strict";

  var slideRec = document.getElementsByClassName("slides-carousel"),
    i;

  if (n > slideRec.length) {
    // to prevent larger values than the slide length

    slideIndexRec = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndexRec = slideRec.length;
  }

  for (i = 0; i < slideRec.length; i++) {
    // to make other images dispaly: none

    slideRec[i].style.display = "none";
  }
  slideRec[slideIndexRec - 1].style.display = "block";
}

showImageRec(slideIndexRec);

function plusIndexRec(n) {
  // for Next & Prev Actions

  "use strict";

  showImageRec((slideIndexRec += n));
}

function currentSlideRec(n) {
  // for Slide Bullets Selection

  "use strict";

  showImageRec((slideIndexRec = n));
}

// LETTERS CAROUSEL  ////////////////////////////
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".letters_carousel_items");

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start);

  slider.addEventListener("mousemove", move);
  slider.addEventListener("touchmove", move);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("mouseup", end);
  slider.addEventListener("touchend", end);
})();

// MAIN FORM
let timer;

document.addEventListener("input", (e) => {
  const el = e.target;

  if (el.matches("[data-color]")) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(
        `--color-${el.dataset.color}`,
        el.value
      );
    }, 100);
  }
});

// FORM INPUT FILE

var input = document.getElementById("file-upload");
var infoArea = document.getElementById("file-upload-filename");

input.addEventListener("change", showFileName);

function showFileName(event) {
  // the change event gives us the input it occurred in
  var input = event.srcElement;

  // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
  var fileName = input.files[0].name;

  // use fileName however fits your app best, i.e. add it into a div
  infoArea.textContent = "Выбранный файл: " + fileName;
}
