const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

for (let i = 0; i < 250; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    s: Math.random() * 0.4 + 0.1
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    star.y += star.s;
    if (star.y > canvas.height) star.y = 0;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
