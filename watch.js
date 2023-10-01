
function timeNow() {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    // Format
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    // display
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        currentTimeElement.innerText = formattedTime;
    }
}

setInterval(timeNow, 1000);



document.addEventListener('DOMContentLoaded', function () {
    
    let isChronoVisible = true; // Indique si le chrono est visible par défaut
    let displayWatch = document.getElementById('currentTime');
    let displayChrono = document.getElementById('chrono');

    // Fonction pour basculer entre l'affichage de l'heure et du chrono
    function toggleWatch() {
        isChronoVisible = !isChronoVisible;

        if (isChronoVisible) {
            displayWatch.style.display = 'none';
            displayChrono.style.display = 'block';
        } else {
            displayWatch.style.display = 'block';
            displayChrono.style.display = 'none';
        }
    }

    // Masquer le chrono au chargement de la page
    displayChrono.style.display = 'none'; // Masquer le chrono par défaut

    // Gestionnaire d'événement pour le bouton Toggle
    const toggleButton = document.querySelector('.Toggle');
    toggleButton.addEventListener('click', toggleWatch);
});










