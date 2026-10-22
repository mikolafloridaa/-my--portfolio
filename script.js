const toggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  root.dataset.theme = "dark";
}

function updateLabel() {
  const dark = root.dataset.theme === "dark";
  toggle.textContent = dark ? "Світла тема" : "Темна тема";
  toggle.setAttribute("aria-pressed", String(dark));
}

toggle.addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  if (dark) {
    delete root.dataset.theme;
    localStorage.setItem("theme", "light");
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
  updateLabel();
});

updateLabel();
