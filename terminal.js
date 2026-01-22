const terminal = document.getElementById("terminal");
const textEl = document.getElementById("terminalText");
const openBtn = document.getElementById("openTerminal");

const resume = `
$ whoami
Abhishek Sisodiya

$ summary
Software Engineer with 3+ years of experience in ML-driven systems,
automation, and backend engineering.

$ experience
- Tata Consultancy Services | Software Developer | 2022–Present
- Weminte Services Pvt Ltd | Software Dev Intern | 2021–2022
- Estylo Pvt Ltd (IIT Delhi Startup) | Intern | 2019–2021

$ skills
Python, FastAPI, Django, Node.js
Machine Learning, Deep Learning, LLMs
AWS, GCP, Docker, Kubernetes, PySpark

$ education
Integrated B.Tech & M.Tech (CSE - AI & Robotics)
Gautam Buddha University (2017–2022)
CGPA: 8.27
`;

openBtn.onclick = () => {
  terminal.style.display = "block";
  textEl.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    textEl.textContent += resume[i++];
    if (i >= resume.length) clearInterval(t);
  }, 12);
};

window.addEventListener("keydown", e => {
  if (e.key === "Escape") terminal.style.display = "none";
});
