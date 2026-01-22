const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
let mouse = { x: 0, y: 0 };
let stars = [];
let shooters = [];
let galaxies = [];

function resize() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
  init();
}
addEventListener("resize", resize);
addEventListener("mousemove", e => mouse = e);

function init() {
  stars = [];
  galaxies = [];

  // Star layers (far → near)
  const layers = [
    { count: 180, size: 0.6, depth: 0.2 },
    { count: 120, size: 1.2, depth: 0.5 },
    { count: 60, size: 2.2, depth: 0.9 }
  ];

  layers.forEach(l =>
    Array.from({ length: l.count }).forEach(() =>
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * l.size + 0.2,
        z: l.depth
      })
    )
  );

  // Galaxy clusters
  for (let i = 0; i < 6; i++) {
    galaxies.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 120 + 80,
      a: Math.random() * 0.06 + 0.03
    });
  }
}

function spawnShooter() {
  shooters.push({
    x: Math.random() * w,
    y: 0,
    vx: Math.random() * 6 + 6,
    vy: Math.random() * 6 + 6,
    life: 0
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  // Galaxies
  galaxies.forEach(g => {
    ctx.fillStyle = `rgba(120,120,255,${g.a})`;
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Stars
  stars.forEach(s => {
    const dx = (mouse.x - w / 2) * s.z * 0.01;
    const dy = (mouse.y - h / 2) * s.z * 0.01;
    ctx.fillStyle = `rgba(255,255,255,${0.15 + s.z * 0.4})`;
    ctx.beginPath();
    ctx.arc(s.x + dx, s.y + dy, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Shooting stars
  shooters.forEach((sh, i) => {
    sh.x += sh.vx;
    sh.y += sh.vy;
    sh.life++;

    ctx.strokeStyle = "rgba(255,255,255,.6)";
    ctx.beginPath();
    ctx.moveTo(sh.x, sh.y);
    ctx.lineTo(sh.x - sh.vx * 4, sh.y - sh.vy * 4);
    ctx.stroke();

    if (sh.life > 40) shooters.splice(i, 1);
  });

  if (Math.random() < 0.004) spawnShooter();

  requestAnimationFrame(draw);
}

resize();
draw();
