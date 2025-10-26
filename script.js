const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const scrollTopBtn = document.getElementById("scrollTop");

// Tema
if (localStorage.getItem("theme") === "light") {
  body.setAttribute("data-theme", "light");
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "light") {
    body.removeAttribute("data-theme");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Botão "voltar ao topo"
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
