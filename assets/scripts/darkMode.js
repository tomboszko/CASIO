let toggleDarkMode = document.getElementById("toggle-darkmode");
let body = document.body;
let ecran = document.getElementById('screen');
let game = document.getElementsByClassName('Game');
let digits = document.getElementById('currentTime');
let displayModeGame = document.getElementById('displayModeGame');

toggleDarkMode.addEventListener("change", () => {
  if (toggleDarkMode.value === "dark") {
    body.classList.add("dark-mode");
    ecran.classList.add('dark-mode');
    digits.classList.add('dark-mode');
  } else if (toggleDarkMode.value === "game") {
    body.classList.add("game-mode");
    ecran.classList.add('game-mode');
    digits.classList.add('game-mode');
    displayModeGame.classList.add('game-mode');
  } else {
    body.classList.remove("dark-mode");
    ecran.classList.remove('dark-mode');
    digits.classList.remove('dark-mode');
    body.classList.remove("game-mode");
    ecran.classList.remove('game-mode');
    digits.classList.remove('game-mode');
    displayModeGame.classList.remove('game-mode');
  }
});
