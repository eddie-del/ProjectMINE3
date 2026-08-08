function moveRandomEl(elm) {
  elm.style.position = "absolute";

  // Define safe margins (e.g., 15% from top and bottom)
  const minTop = window.innerHeight * 0.15;
  const maxTop = window.innerHeight * 0.85 - elm.offsetHeight;

  const minLeft = window.innerWidth * 0.05;
  const maxLeft = window.innerWidth * 0.95 - elm.offsetWidth;

  const top = Math.floor(Math.random() * (maxTop - minTop) + minTop);
  const left = Math.floor(Math.random() * (maxLeft - minLeft) + minLeft);

  elm.style.top = top + "px";
  elm.style.left = left + "px";
}

const moveRandom = document.querySelector("#move-random");

["mouseenter", "click"].forEach(event => {
  moveRandom.addEventListener(event, (e) => {
    moveRandomEl(e.target);
  });
});
