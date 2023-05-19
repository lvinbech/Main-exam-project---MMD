"use strict";

// Lavet ved hjælp af ChatGBT - JavaScript code for scroll-up functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", function () {
  var scrollButton = document.querySelector(".scroll-up");
  if (window.pageYOffset > 200) {
    scrollButton.classList.add("show-scroll-up");
  } else {
    scrollButton.classList.remove("show-scroll-up");
  }
});
