document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  if (!track) return; // stop if no carousel exists

  const images = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Optional auto-slide every 4 seconds
  setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
  }, 4000);
});
