const rootElement = document.documentElement;
const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");

function applyTheme(theme, savePreference = false) {
  const selectedTheme = theme === "light" ? "light" : "dark";
  rootElement.dataset.theme = selectedTheme;

  themeToggleButtons.forEach((button) => {
    const darkModeEnabled = selectedTheme === "dark";
    button.setAttribute("aria-pressed", String(darkModeEnabled));
    button.setAttribute(
      "aria-label",
      darkModeEnabled ? "Switch to light mode" : "Switch to dark mode"
    );
    button.title = darkModeEnabled ? "Switch to light mode" : "Switch to dark mode";

    const icon = button.querySelector("[data-theme-icon]");
    if (icon) {
      icon.textContent = darkModeEnabled ? "☾" : "☀";
    }
  });

  if (savePreference) {
    try {
      localStorage.setItem("portfolio-theme", selectedTheme);
    } catch (error) {
      // Keep the selected theme for this page even when storage is unavailable.
    }
  }
}

applyTheme(rootElement.dataset.theme || "dark");

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(rootElement.dataset.theme === "dark" ? "light" : "dark", true);
  });
});

window.addEventListener("storage", (event) => {
  if (event.key === "portfolio-theme" && event.newValue) {
    applyTheme(event.newValue);
  }
});

if (window.VANTA && typeof window.VANTA.CELLS === "function") {
  window.VANTA.CELLS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    color1: 0x263b73,
    color2: 0x0b1220,
    speed: 1.25
  });
}

if (window.Typed && document.querySelector("#typed-output")) {
  new Typed('#typed-output', {
    strings: [
      "Hi there!",
      "I like creating responsive website.",
      "Very passionate about design and coding.",
      "Interested?",
      "Feel free to reach me out.",
      "Thanks for visiting my site.",
    ],
    typeSpeed: 40,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
  });
}

const typedOutput = document.getElementById('typed-output');
if (typedOutput) {
  typedOutput.style.fontStyle = 'italic';
  typedOutput.style.fontSize = '0.98em'; // adjusted this for slightly smaller display
}

