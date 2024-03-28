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
$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
    // Add or remove 'active' class
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
  });

  // Get the modal and images
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var img = document.getElementsByClassName("img-fluid");
  // Current image index
  var currentImgIndex = 0;
  // Open the modal and display the clicked image
  for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      // Set the current image index
      currentImgIndex = Array.from(img).indexOf(this);
    });
  }
  // Close the modal
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
  // Navigate to the previous image
  var prev = document.getElementsByClassName("prev")[0];
  prev.onclick = function () {
    currentImgIndex = (currentImgIndex - 1 + img.length) % img.length;
    modalImg.src = img[currentImgIndex].src;
  };
  // Navigate to the next image
  var next = document.getElementsByClassName("next")[0];
  next.onclick = function () {
    currentImgIndex = (currentImgIndex + 1) % img.length;
    modalImg.src = img[currentImgIndex].src;
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
