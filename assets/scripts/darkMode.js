


let toggleDarkMode = document.getElementById("toggle-darkmode");
let body = document.body;
let ecran = document.getElementById('screen');

toggleDarkMode.addEventListener("change", () => {
  
  if (toggleDarkMode.value === "dark") {
    body.classList.add("dark-mode");
    ecran.classList.add('dark-mode');
  
  } else {
    body.classList.remove("dark-mode");
    ecran.classList.remove("dark-mode");
  }
});

