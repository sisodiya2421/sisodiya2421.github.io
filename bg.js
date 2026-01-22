const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
let mouse = { x: 0, y: 0 };
let stars = [];

function resize() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
  initStars();
}
window.addEventListener("resize", resize);
window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function initStars() {
  const count = w < 768 ? 80 : 160;
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random() * 0.8 + 0.2,
    r: Math.random() * 1.2 + 0.3
  }));
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  stars.forEach(s => {
    const dx = (mouse.x - w / 2) * s.z * 0.02;
    const dy = (mouse.y - h / 2) * s.z * 0.02;
    ctx.fillStyle = `rgba(255,255,255,${0.15 + s.z * 0.3})`;
    ctx.beginPath();
    ctx.arc(s.x + dx, s.y + dy, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

resize();
draw();
