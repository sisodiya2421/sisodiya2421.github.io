const terminal = document.getElementById("terminal");
const textEl = document.getElementById("terminalText");
const openBtn = document.getElementById("openTerminal");
const closeBtn = document.getElementById("closeTerminal");

const resume = `
$ whoami
Abhishek Sisodiya

$ summary
Software Engineer with 3+ years of experience in ML systems,
automation, and backend engineering.

$ experience
- Tata Consultancy Services | Software Developer | 2022–Present
- Weminte Services Pvt Ltd | Software Dev Intern | 2021–2022
- Estylo Pvt Ltd (IIT Delhi Startup) | Intern | 2019–2021

$ skills
Python, FastAPI, Django, Node.js
Machine Learning, LLMs
AWS, GCP, Docker, Kubernetes

$ education
Integrated B.Tech & M.Tech (CSE - AI & Robotics)
Gautam Buddha University
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

closeBtn.onclick = () => terminal.style.display = "none";
addEventListener("keydown", e => e.key === "Escape" && (terminal.style.display = "none"));
