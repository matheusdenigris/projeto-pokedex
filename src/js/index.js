const changeButtonTheme = document.getElementById("change-button-theme");
const body = document.querySelector("body");
const changeButtonImageTheme = document.querySelector(".button-image");

changeButtonTheme.addEventListener("click", () => {
  const darkModeActive = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeActive) {
    changeButtonImageTheme.setAttribute("src", "./src/images/sun.png");
  } else {
    changeButtonImageTheme.setAttribute("src", "./src/images/moon.png");
  }
});