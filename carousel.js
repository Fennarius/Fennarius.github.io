window.addEventListener("DOMContentLoaded", function () {
    var carouselContainer = document.querySelector(".carousel-container");
    var carousel = document.querySelector(".carousel");
    var slides = document.querySelectorAll(".slide");
  
    var currentIndex = 0;
    var slideWidth = 0;
    var numSlides = slides.length;
  
    // Set the initial position of the carousel
    carousel.style.transform = "translateX(0)";
  
    // Calculate the slide width based on the container size
    function calculateSlideWidth() {
      slideWidth = carouselContainer.offsetWidth;
      slides.forEach(function (slide) {
        slide.style.width = slideWidth + "px";
      });
    }
  
    // Recalculate slide width on window resize
    window.addEventListener("resize", calculateSlideWidth);
  
    // Add event listeners for arrow navigation
    var prevArrow = document.querySelector(".arrow.prev");
    var nextArrow = document.querySelector(".arrow.next");
    prevArrow.addEventListener("click", navigateCarousel.bind(null, -1));
    nextArrow.addEventListener("click", navigateCarousel.bind(null, 1));
  
    function navigateCarousel(direction) {
      currentIndex += direction;
  
      if (currentIndex < 0) {
        currentIndex = numSlides - 1;
      } else if (currentIndex >= numSlides) {
        currentIndex = 0;
      }
  
      var translateX = -currentIndex * slideWidth;
      carousel.style.transform = "translateX(" + translateX + "px)";
    }
  
    // Initial calculation of slide width
    calculateSlideWidth();
  });
  