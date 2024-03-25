const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  } else {
    navEl.classList.remove("navbar-scrolled");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var carouselImages = document.querySelectorAll(".carousel-item img");
  var prevControl = document.querySelector(".carousel-control-prev");
  var nextControl = document.querySelector(".carousel-control-next");

  function setControlBackgrounds() {
    var activeIndex = Array.from(carouselImages).findIndex(function (img) {
      return img.parentElement.classList.contains("active");
    });

    if (activeIndex === 0) {
      prevControl.style.backgroundImage =
        "url(" + carouselImages[carouselImages.length - 1].src + ")";
    } else {
      prevControl.style.backgroundImage =
        "url(" + carouselImages[activeIndex - 1].src + ")";
    }

    if (activeIndex === carouselImages.length - 1) {
      nextControl.style.backgroundImage = "url(" + carouselImages[0].src + ")";
    } else {
      nextControl.style.backgroundImage =
        "url(" + carouselImages[activeIndex + 1].src + ")";
    }
  }

  setControlBackgrounds();

  var carousel = document.querySelector(".carousel");
  carousel.addEventListener("slid.bs.carousel", function () {
    setControlBackgrounds();
  });
});