const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.card');

window.addEventListener('load', () => {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');

  // Get actual card width + gap from computed styles
  const cardStyle = window.getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(cardStyle.marginRight || 25); // fallback if no gap set

  // Distance from Card 1 to Card 2
  const offsetToCard2 = cardWidth + gap;

  // Center offset based on carousel width
  const centerOffset = (carousel.offsetWidth - cardWidth) / 2;

  // Scroll so Card 2 is centered
  carousel.scrollLeft = offsetToCard2 - centerOffset;
});



// Hide Next button initially
nextBtn.style.display = "none";

// Track flipped cards
let flippedCount = 0;
cards.forEach(card => {
  card.addEventListener('click', () => {
    // If card not already flipped, count it
    if (!card.classList.contains('flipped')) {
      card.classList.add('flipped');
      flippedCount++;
    }

    // Show Next button when all 3 are flipped
    if (flippedCount === cards.length) {
      nextBtn.style.display = "inline-flex"; // matches your flex styling
    }
  });
});

// Next button → go to no2.html
nextBtn.addEventListener('click', () => {
  window.location.href = "no3.html";
});

window.addEventListener('load', () => {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');

  // --- Center Card 2 dynamically ---
  if (cards.length >= 2) {
    const cardWidth = cards[1].offsetWidth; // actual width of Card 2
    const gap = parseInt(getComputedStyle(cards[1]).marginRight || 25);
    const offsetToCard2 = cardWidth + gap; // distance from Card 1 to Card 2
    const centerOffset = (carousel.offsetWidth - cardWidth) / 2;
    carousel.scrollLeft = offsetToCard2 - centerOffset;
  }

  // --- Auto flip back after 3s ---
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('flipped');
      setTimeout(() => {
        card.classList.remove('flipped');
      }, 3000);
    });
  });
});



