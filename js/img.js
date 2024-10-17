let slideIndex = 0;
showSlides();
setInterval(showSlides, 3000); // 每3秒自动切换

function showSlides() {
  let slides = document.querySelectorAll('.slides img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
}

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}