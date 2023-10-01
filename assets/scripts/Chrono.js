
// Exercise 2

// Write a function that displays every second that has passed
// on the page since it was opened. The display should be refreshed every second.
// If 60 seconds are elapsed, write "a minute has passed", 
// then "2 minutes have passed" (for 120 seconds and more), etc.

 // I changed the main goal of the exercice: it's now a casio watch.

// watch:





let intervalId = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lastLapTime = 0; 
let lapTimes = []; 
let maxLapCount = 3;

  

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

  let lapSound = document.getElementById('mainSound');

  if (isRunning) {

    
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime += new Date().getTime() - startTime;
    lapSound.play();
  } else {
    if (intervalId === null) {
      startTime = new Date().getTime() - (startTime - startTime);
      intervalId = setInterval(chrono, 1);
      lapSound.play();
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
  
  let lapSound = document.getElementById('mainSound');

  document.getElementById('minutesPassed').innerText ='00';
  document.getElementById('secondsPassed').innerText =':00';
  document.getElementById('milliSecondsPassed').innerText =':000';
  updateLapDisplay();
  lapSound.play();
}

// lap count
function LapChrono() {

  let lapSound = document.getElementById('lapSound');
  if (isRunning) {
      const currentTime = new Date().getTime() - startTime + elapsedTime;
      const lapTime = currentTime - lastLapTime;
      lapTimes.push(lapTime); 
      updateLapDisplay(); 
      lapSound.play();
  }
}

function updateLapDisplay() {
    let lapListElement = document.getElementById('lapList');
    lapListElement.innerHTML = ''; 
  
    // display last 3 laps
    let startIndex = Math.max(lapTimes.length - 3, 0);
    let totalLapTime = 0; 

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

