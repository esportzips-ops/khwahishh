// Background music
const music = document.getElementById('bg-music');
document.getElementById('play-music-btn').addEventListener('click', function() {
  music.play();
  this.style.display = 'none';
});

// Hug alert
document.getElementById('hug-btn').addEventListener('click', () => {
  alert("💖🧸 This hug is forever… just like my love for you!");
});

// Floating hearts
const heartsContainer = document.querySelector(".hearts");
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Slides stacked logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  if (currentSlide < slides.length - 1) currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  if (currentSlide > 0) currentSlide--;
  showSlide(currentSlide);
}

// Swipe support
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.slider-container').addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
document.querySelector('.slider-container').addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});
