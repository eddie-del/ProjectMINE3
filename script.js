// function moveRandomEl(elm) {
//   elm.style.position = "absolute";

//   const minTop = window.innerHeight * 0.15;
//   const maxTop = window.innerHeight * 0.85 - elm.offsetHeight;

//   const minLeft = window.innerWidth * 0.05;
//   const maxLeft = window.innerWidth * 0.95 - elm.offsetWidth;

//   const top = Math.floor(Math.random() * (maxTop - minTop) + minTop);
//   const left = Math.floor(Math.random() * (maxLeft - minLeft) + minLeft);

//   elm.style.top = top + "px";
//   elm.style.left = left + "px";
// }

const noBtn = document.querySelector("#move-random"); 
const yesBtn = document.querySelector("#oo-btn");

let attempts = 0;

noBtn.addEventListener("click", (e) => {
  moveRandomEl(e.target);

  attempts++;

  // Combine bounce + growth
  const scale = 1 + attempts * 0.15;
  yesBtn.style.transform = `translateY(0) scale(${scale})`;

  // Keep bounce animation active
  yesBtn.style.animation = "bounce 2s infinite";

  // After 5 clicks, hide "hindi"
  if (attempts >= 5) {
    noBtn.style.display = "none";
  }
});
