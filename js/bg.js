const c = document.getElementById("bg");
const ctx = c.getContext("2d");

function resize() {
  c.width = innerWidth;
  c.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * c.width,
  y: Math.random() * c.height,
  r: Math.random() * 0.8 + 0.2,
  a: Math.random() * 0.3 + 0.1
}));

function draw() {
  ctx.clearRect(0,0,c.width,c.height);
  stars.forEach(s => {
    ctx.fillStyle = `rgba(255,255,255,${s.a})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
