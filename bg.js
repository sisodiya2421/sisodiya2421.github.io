const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
let mouse = { x: 0, y: 0 };
let stars = [];
let shooters = [];

function resize() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
  initStars();
}
addEventListener("resize", resize);
addEventListener("mousemove", e => mouse = e);

function initStars() {
  stars = [];
  const layers = [
    { count: 120, speed: 0.05, size: 0.6 }, // far
    { count: 80, speed: 0.15, size: 1.2 },  // mid
    { count: 40, speed: 0.3, size: 2.2 }    // near
  ];

  layers.forEach(l =>
    Array.from({ length: l.count }).forEach(() =>
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * l.size + .2,
        s: l.speed,
        z: Math.random()
      })
    )
  );
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
  ctx.clearRect(0,0,w,h);

  stars.forEach(s => {
    const dx = (mouse.x - w/2) * s.z * 0.01;
    const dy = (mouse.y - h/2) * s.z * 0.01;
    ctx.fillStyle = `rgba(255,255,255,${0.15 + s.z * 0.4})`;
    ctx.beginPath();
    ctx.arc(s.x + dx, s.y + dy, s.r, 0, Math.PI*2);
    ctx.fill();
  });

  shooters.forEach((sh, i) => {
    sh.x += sh.vx;
    sh.y += sh.vy;
    sh.life++;

    ctx.strokeStyle = "rgba(255,255,255,.6)";
    ctx.beginPath();
    ctx.moveTo(sh.x, sh.y);
    ctx.lineTo(sh.x - sh.vx*4, sh.y - sh.vy*4);
    ctx.stroke();

    if (sh.life > 40) shooters.splice(i,1);
  });

  if (Math.random() < 0.005) spawnShooter();

  requestAnimationFrame(draw);
}

resize();
draw();
