

const displayModes = document.querySelectorAll('#displayMode li');
const displayScreens = document.querySelectorAll('#displayScreen li');

for (let i = 1; i < displayModes.length; i++) {
    displayModes[i].style.display = 'none';
    displayScreens[i].style.display = 'none';
}

let currentModeIndex = 0;
let lapSound = document.getElementById('mainSound');
function toggleMode() {
    
    displayModes[currentModeIndex].style.display = 'none';
    displayScreens[currentModeIndex].style.display = 'none';

    currentModeIndex = (currentModeIndex + 1) % displayModes.length;

    displayModes[currentModeIndex].style.display = 'block';
    displayScreens[currentModeIndex].style.display = 'block';
    lapSound.play();

}

const toggleButton = document.querySelector('.Toggle');
toggleButton.addEventListener('click', toggleMode);



