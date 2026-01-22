const items = document.querySelectorAll(".event");

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = "translateY(0)";
      e.target.style.transition = "0.7s ease";
    }
  });
});

items.forEach(i => io.observe(i));
