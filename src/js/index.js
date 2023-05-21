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

const profileBox = document.getElementById("profile-box");
const profileButton = document.getElementById("profile-button");

profileButton.addEventListener('click', () => {
  if (profileBox.style.left === '-300px') {
    profileBox.style.left = '0';
  } else {
    profileBox.style.left = '-300px';
  }
});