const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  } else {
    navEl.classList.remove("navbar-scrolled");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var carouselImages1 = document.querySelectorAll(
    "#CarouselHead .carousel-item img"
  );
  var prevControl1 = document.querySelector(
    "#CarouselHead .carousel-control-prev"
  );
  var nextControl1 = document.querySelector(
    "#CarouselHead .carousel-control-next"
  );
  var carouselImages2 = document.querySelectorAll(
    "#CarouselRoom .carousel-item img"
  );
  var prevControl2 = document.querySelector(
    "#CarouselRoom .carousel-control-prev"
  );
  var nextControl2 = document.querySelector(
    "#CarouselRoom .carousel-control-next"
  );
  function setControlBackgrounds1() {
    var activeIndex = Array.from(carouselImages1).findIndex(function (img) {
      return img.parentElement.classList.contains("active");
    });
    if (activeIndex === 0) {
      prevControl1.style.backgroundImage =
        "url(" + carouselImages1[carouselImages1.length - 1].src + ")";
    } else {
      prevControl1.style.backgroundImage =
        "url(" + carouselImages1[activeIndex - 1].src + ")";
    }
    if (activeIndex === carouselImages1.length - 1) {
      nextControl1.style.backgroundImage =
        "url(" + carouselImages1[0].src + ")";
    } else {
      nextControl1.style.backgroundImage =
        "url(" + carouselImages1[activeIndex + 1].src + ")";
    }
  }
  function setControlBackgrounds2() {
    var activeIndex = Array.from(carouselImages2).findIndex(function (img) {
      return img.parentElement.classList.contains("active");
    });
    if (activeIndex === 0) {
      prevControl2.style.backgroundImage =
        "url(" + carouselImages2[carouselImages2.length - 1].src + ")";
    } else {
      prevControl2.style.backgroundImage =
        "url(" + carouselImages2[activeIndex - 1].src + ")";
    }
    if (activeIndex === carouselImages2.length - 1) {
      nextControl2.style.backgroundImage =
        "url(" + carouselImages2[0].src + ")";
    } else {
      nextControl2.style.backgroundImage =
        "url(" + carouselImages2[activeIndex + 1].src + ")";
    }
  }
  setControlBackgrounds1();
  setControlBackgrounds2();
  var carousel1 = document.querySelector("#CarouselHead");
  var carousel2 = document.querySelector("#CarouselRoom");
  carousel1.addEventListener("slid.bs.carousel", function () {
    setControlBackgrounds1();
  });
  carousel2.addEventListener("slid.bs.carousel", function () {
    setControlBackgrounds2();
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
