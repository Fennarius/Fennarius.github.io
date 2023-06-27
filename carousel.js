window.addEventListener("DOMContentLoaded", function () {
    var carouselContainer = document.querySelector(".carousel-container");
    var carousel = document.querySelector(".carousel");
    var slides = document.querySelectorAll(".slide");
  
    var scrollDistance = 250; 
  
    
    carousel.style.width = slides.length * scrollDistance + "px";
  
    
    carouselContainer.addEventListener("wheel", scrollCarousel);
    carouselContainer.addEventListener("touchstart", handleTouchStart);
    carouselContainer.addEventListener("touchmove", handleTouchMove);
    carouselContainer.addEventListener("touchend", handleTouchEnd);
  
    var touchStartX;
    var touchEndX;
  
    function scrollCarousel(event) {
      event.preventDefault();
  
      var scrollAmount = event.deltaY > 0 ? scrollDistance : -scrollDistance;
      carousel.scrollLeft += scrollAmount;
    }
  
    function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
    }
  
    function handleTouchMove(event) {
      touchEndX = event.touches[0].clientX;
    }
  
    function handleTouchEnd(event) {
      var touchDistance = touchEndX - touchStartX;
      var scrollAmount = touchDistance > 0 ? scrollDistance : -scrollDistance;
      carousel.scrollLeft += scrollAmount;
    }
  });
  