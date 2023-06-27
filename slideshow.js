window.addEventListener("DOMContentLoaded", function () {
    var images = ["VisitFlorida.jpg", "artisticFlorida.jpg", "UCFFlorida.jpg", "disneyFlorida.jpg"]; 
    var currentIndex = 0;
    var slideshowImage = document.getElementById("slideshow-image");
  
    function changeSlide() {
      slideshowImage.style.opacity = 0;
      slideshowImage.src = "resources/" + images[currentIndex];
      fadeIn(slideshowImage);
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    function fadeIn(element) {
      var opacity = 0;
      var timer = setInterval(function () {
        if (opacity >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
      }, 50);
    }
  
    setInterval(changeSlide, 4500); 
  });