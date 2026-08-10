window.addEventListener('load', () => {
  const courtText = document.getElementById('court-text');
  const jkText = document.getElementById('jk-text');

  // Show "I wanna court you" after 2 seconds, fade out "Just kidding"
  setTimeout(() => {
    jkText.style.opacity = 1; 
    courtText.style.opacity = 1; // fade in "I wanna court you"
  }, 2000);
});

const noBtn = document.getElementById('move-random');
const ayawText = document.getElementById('ayaw-text');
const gifImg = document.getElementById('gif-img');
const ooBtn = document.getElementById('oo-btn');

const gifs = ['img/mochi1.gif','img/mochi-mochimochi_yamot.webp','img/begging-cat-cat.webp', 'img/lonzo-ball_crying.webp','img/mochi-cat_sad.webp'];
const texts = ['hehehhe 😈','ayy ayyaww🥲?','sige na please 💖','luhh siya', 'Noooo! talaga ba?'];

let currentIndex = 0;
let clickCount = 0;

noBtn.addEventListener('click', (e) => {
  e.preventDefault();

  clickCount++;

  ayawText.style.display = 'block';

  currentIndex = (currentIndex + 1) % gifs.length;
  gifImg.src = gifs[currentIndex];
  ayawText.textContent = texts[currentIndex];

 // Random positions within middle band of the viewport
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const btnWidth = noBtn.offsetWidth;
const btnHeight = noBtn.offsetHeight;

// Middle band limits
const minX = screenWidth * 0.25;
const maxX = screenWidth * 0.75 - btnWidth;

const minY = screenHeight * 0.35;
const maxY = screenHeight * 0.65 - btnHeight;

const randX = Math.floor(Math.random() * (maxX - minX) + minX);
const randY = Math.floor(Math.random() * (maxY - minY) + minY);

// Use fixed positioning so it's relative to the viewport
noBtn.style.position = 'fixed';
noBtn.style.left = randX + 'px';
noBtn.style.top = randY + 'px';


  // Hide hindi button after 5 clicks and grow oo button
  if (clickCount >= 5) {
    noBtn.style.display = 'none';
    ooBtn.classList.add('grow');
  }
});

