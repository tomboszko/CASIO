/*
// simple counter
console.log("WARNING! In exactly five seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}
setTimeout(theExplosion, 5000);


// simple counter combined with events

function theExplosion() {
    alert("BOOM!");
  }
  
  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    setTimeout(theExplosion, 5000);

  });
  document.body.appendChild(button);


// recursion

let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;

  const nextCall = Math.floor(Math.random() * 5000); // Random delay until heyYou() is called again
  setTimeout(heyYou, nextCall);
}

heyYou(); // first call

let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}



// set interval() function
let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);

// clear interval 

let interval;
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}



// Exercise 1
// Write a function that mimics the behaviour of a typewriter.
// Using setInterval display the word Keller one character at a time (one letter per second). 
// Once the word is written on the screen clear the interval.


function typewriter(word) {
    
    let index = 0;
    let wordDisplay = document.getElementById('wordDisplay');

    const interval = setInterval(function () {

      if (index < word.length) {

        wordDisplay.textContent += word[index];
            index++;

      } else {
        clearInterval(interval);
      }

    }, 800); 
  }
  
  typewriter("Keller");

  */

// Exercise 2
// Write a function that displays every second that has passed
// on the page since it was opened. The display should be refreshed every second.
// If 60 seconds are elapsed, write "a minute has passed", 
// then "2 minutes have passed" (for 120 seconds and more), etc.

 // I changed the main goal of the exercice: it's now a chronometer.

// chrono

let intervalId = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lastLapTime = 0; // Stocke le temps du dernier appui sur Lap
const lapTimes = []; // Tableau pour stocker les valeurs des tours
const maxLapCount = 3; // Nombre maximum de tours à afficher


// Fonction pour afficher l'heure actuelle
function timeNow() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    // Formater l'heure
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    // Afficher l'heure dans un élément HTML avec l'ID "currentTime"
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        currentTimeElement.innerText = formattedTime;
    }
}

// Actualiser l'heure toutes les secondes (1000 millisecondes)
setInterval(timeNow, 1000);

  

function chrono() {
  if (isRunning) {
    const currentTime = new Date().getTime() - startTime + elapsedTime;
    const milliSeconds = currentTime % 1000;
    const seconds = Math.floor(currentTime / 1000) % 60;
    const minutes = Math.floor(currentTime / 1000 / 60);

    const formattedMilliSeconds = milliSeconds < 10 ? `00${milliSeconds}` : (milliSeconds < 100 ? `0${milliSeconds}` : milliSeconds);

    document.getElementById('minutesPassed').innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
    document.getElementById('secondsPassed').innerText = `:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('milliSecondsPassed').innerText = `:${formattedMilliSeconds}`;
  }
}

function toggleChrono() {
  if (isRunning) {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime += new Date().getTime() - startTime;
  } else {
    if (intervalId === null) {
      startTime = new Date().getTime() - (startTime - startTime);
      intervalId = setInterval(chrono, 1);
    }
  }
  isRunning = !isRunning;
}

function resetChrono() {
  startTime = 0;
  elapsedTime = 0;
  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;
  lastLapTime = 0; 
  lapTimes.length = 0;

  document.getElementById('minutesPassed').innerText ='00';
  document.getElementById('secondsPassed').innerText =':00';
  document.getElementById('milliSecondsPassed').innerText =':000';
  updateLapDisplay();
}

function LapChrono() {
  if (isRunning) {
    const currentTime = new Date().getTime() - startTime + elapsedTime;
    const lapTime = currentTime - lastLapTime; // Calculer le temps depuis le dernier appui sur Lap
    lastLapTime = currentTime; // Mettre à jour le temps du dernier appui sur Lap
    lapTimes.push(lapTime); // Ajouter la valeur du tour au tableau
    updateLapDisplay(); // Mettre à jour l'affichage des tours
  }
}

function updateLapDisplay() {
    const lapListElement = document.getElementById('lapList');
    lapListElement.innerHTML = ''; // Effacer le contenu précédent
  
    // Afficher les 3 derniers tours au maximum
    const startIndex = Math.max(lapTimes.length - 3, 0);
    let totalLapTime = 0; // Initialiser la somme des temps de tour

  
    for (let i = startIndex; i < lapTimes.length; i++) {
      const lapTime = lapTimes[i];
      totalLapTime += lapTime;
  
      const minutes = Math.floor(lapTime / 1000 / 60);
      const seconds = Math.floor(lapTime / 1000) % 60;
      const milliSeconds = lapTime % 1000;
      const formattedMilliSeconds = milliSeconds < 10 ? `00${milliSeconds}` : (milliSeconds < 100 ? `0${milliSeconds}` : milliSeconds);
  
      const lapItem = document.createElement('li');
      lapItem.innerText = `Lap ${i + 1}: ${minutes < 10 ? '0':''}${minutes}:${seconds < 10 ? '0':''}${seconds}:${formattedMilliSeconds}`;
      lapListElement.appendChild(lapItem);
    }
}

