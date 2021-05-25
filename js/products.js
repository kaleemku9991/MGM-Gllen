
// sliders automation
window.addEventListener("load", function () {
  showSlidesProduct(slideIndexProduct);
  myTimerProduct = setInterval(function () { plusSlidesProduct(1) }, 4000);
})
//slider  index html static
let slideIndexProduct = 1;
showSlidesProduct(slideIndexProduct);

function currentSlideProduct(n) {
  showSlidesProduct(slideIndexProduct = n);
}

function showSlidesProduct(n) {
  let i;
  let slides = document.getElementsByClassName("product-slide");
  let dots = document.getElementsByClassName("points-div");
  if (n > slides.length) { slideIndexProduct = 1 }
  if (n < 1) { slideIndexProduct = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndexProduct - 1].style.display = "block";
  dots[slideIndexProduct - 1].className += " active";
}

// for automatic index
function plusSlidesProduct(n) {
  clearInterval(myTimerProduct);
  if (n < 0) {
    showSlidesProduct(slideIndexProduct -= 1);
  } else {
    showSlidesProduct(slideIndexProduct += 1);
  }
  if (n === -1) {
    myTimerProduct = setInterval(function () { plusSlidesProduct(n + 2) }, 4000);
  } else {
    myTimerProduct = setInterval(function () { plusSlidesProduct(n + 1) }, 4000);
  }
}






