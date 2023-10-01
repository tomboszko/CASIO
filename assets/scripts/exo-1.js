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