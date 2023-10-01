
// TIME NOW
function timeNow() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    const currentTimeElement = document.getElementById('currentTime');

    if (currentTimeElement) {
        currentTimeElement.innerText = formattedTime;
    }   
}
setInterval(timeNow, 1000);



document.addEventListener('DOMContentLoaded', function () {

    let isChronoVisible = true; 
    let displayWatch = document.getElementById('currentTime');
    let displayChrono = document.getElementById('chrono');
    let lapSound = document.getElementById('mainSound');
    let toggleButton = document.querySelector('.Toggle');
    toggleButton.addEventListener('click', toggleWatch);

    // toggle between chrono and watch mode
    function toggleWatch() {

        isChronoVisible = !isChronoVisible;
        lapSound.play();
        if (isChronoVisible) {

            displayWatch.style.display = 'none';
            displayChrono.style.display = 'block';
            displayLap.style.display = 'block';
            
        } else {
            
            displayWatch.style.display = 'block';
            displayChrono.style.display = 'none';
            displayLap.style.display = 'none';
            
        }
     
    }

    // hide chrono at loading
    displayChrono.style.display = 'none';

    
    
});










