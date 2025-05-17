// 3D Tilt for Cards
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.4
});

// Canvas Water Waves
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waveOffset = 0;
function drawWaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const y = 20 * Math.sin((x + waveOffset) * 0.01) + canvas.height / 1.7;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "#00f2ff88";
  ctx.lineWidth = 3;
  ctx.stroke();
  waveOffset += 2;
  requestAnimationFrame(drawWaves);
}
drawWaves();

// Touch Interaction
const content = document.querySelector(".portfolio-content");
document.body.addEventListener("touchstart", () => {
  content.classList.add("show");
});
document.body.addEventListener("touchend", () => {
  content.classList.remove("show");
});
