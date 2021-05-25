window.addEventListener("load", function () {
  showSlidesfab(slideIndexfab);
  myTimerProduct2 = setInterval(function () { plusSlides(1) },  4000);
});

var slideIndexfab = 1;
showSlidesfab(slideIndexfab);

// Next/previous controls
function plusSlides(n) {
  showSlidesfab(slideIndexfab += n);
}


function showSlidesfab(n) {
  var i;
  var slides = document.getElementsByClassName("product-slide1");
  if (n > slides.length) {slideIndexfab = 1}
  if (n < 1) {slideIndexfab = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexfab-1].style.display = "block";
}

function plusSlides(n) {
  clearInterval(myTimerProduct2);
  if (n < 0) {
    showSlidesfab(slideIndexfab -= 1);
  } else {
    showSlidesfab(slideIndexfab += 1);
  }
  if (n === -1) {
    myTimerProduct2 = setInterval(function () { plusSlides(n + 2) }, 4000);
  } else {
    myTimerProduct2 = setInterval(function () { plusSlides(n + 1) }, 4000);
  }
}
