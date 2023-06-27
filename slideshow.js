window.addEventListener("DOMContentLoaded", function () {
    var images = ["resources/VisitFlorida.jpg", "resources/artisticFlorida.jpg", "resources/UCFFlorida.jpg", "resources/disneyFlorida.jpg"]; 
    var currentIndex = 0;
    var slideshowImage = document.getElementById("slideshow-image");
  
    function changeSlide() {
      slideshowImage.src = "resources/" + images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    setInterval(changeSlide, 3000); 
  });