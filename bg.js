const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
let noise = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  generateNoise();
}
window.addEventListener("resize", resize);

function generateNoise() {
  noise = [];
  for (let i = 0; i < 3000; i++) {
    noise.push({
      x: Math.random() * w,
      y: Math.random() * h,
      a: Math.random() * 0.04
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  noise.forEach(n => {
    ctx.fillStyle = `rgba(255,255,255,${n.a})`;
    ctx.fillRect(n.x, n.y, 1, 1);
  });
  requestAnimationFrame(draw);
}

resize();
draw();
