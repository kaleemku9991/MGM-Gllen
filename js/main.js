if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err.text());
    });
  });
}
// sliders automation
window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () { plusSlides(1) }, 4000);
})
// scroll function
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 0px";
    document.getElementById("logo1").style.width = "100px";
  } else {
    document.getElementById("navbar").style.padding = "30px 0px";
    document.getElementById("logo1").style.width = "150px";
  }
}

// hamburger menu

var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.style.display = "none"
  links.forEach(link => {
    link.classList.toggle("fade");
  });

});
window.onclick = function (event) {
  if (!event.target.matches('.nav-links') && !event.target.matches('.hamburger')) {
    navLinks.classList.remove("open");
    hamburger.style.display = "block"
      links.forEach(link => {
        link.classList.remove("fade");
      });
  };
};


//slider  index html static
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("points-div");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// for automatic index
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
  if (n === -1) {
    myTimer = setInterval(function () { plusSlides(n + 2) }, 4000);
  } else {
    myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
  }
}
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
  showSlides(slideIndex = n);
}
