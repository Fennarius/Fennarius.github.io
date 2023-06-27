window.addEventListener("DOMContentLoaded", function () {
    var images = ["VisitFlorida.jpg", "artisticFlorida.jpg", "UCFFlorida.jpg", "disneyFlorida.jpg"]; 
    var currentIndex = 0;
    var slideshowImage = document.getElementById("slideshow-image");
  
    function changeSlide() {
      slideshowImage.src = "resources/" + images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    setInterval(changeSlide, 3000); 
  });