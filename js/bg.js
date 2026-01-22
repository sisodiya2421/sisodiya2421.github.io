const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
let mouse = { x: 0, y: 0 };

function resize() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const stars = Array.from({ length: 180 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  z: Math.random() * 0.6 + 0.2
}));

function draw() {
  ctx.clearRect(0,0,w,h);

  stars.forEach(s => {
    const dx = mouse.x - s.x;
    const dy = mouse.y - s.y;
    const dist = Math.sqrt(dx*dx + dy*dy) || 1;

    const pull = Math.min(12 / dist, 0.15);

    s.x += dx * pull * s.z;
    s.y += dy * pull * s.z;

    // gentle drift
    s.y += 0.05 * s.z;
    if (s.y > h) s.y = 0;

    ctx.fillStyle = `rgba(255,255,255,${0.15 + s.z})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.z * 1.4, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}
draw();
