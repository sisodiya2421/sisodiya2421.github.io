const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");

if (saved) root.dataset.theme = saved;
else if (matchMedia("(prefers-color-scheme: light)").matches)
  root.dataset.theme = "light";

toggle.onclick = () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
};
