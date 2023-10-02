document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les éléments d'affichage
    const displayElements = [
        document.getElementById('currentTime'),
        document.getElementById('chrono'),
        document.getElementById('date'),
        document.getElementById('alarm'),
        document.getElementById('game')
    ];

    const displayTextElements = [
        document.getElementById('displayModeChrono'),
        document.getElementById('displayModeDate'),
        document.getElementById('displayModeAlarm'),
        document.getElementById('displayModeGame')
    ];

    const textIndexMap = {
        0: 0, // currentTime
        1: 2, // chrono
        2: 3, // date
        3: 4, // alarm
        4: 4, // game (utilise le texte de currentTime)
    };

    let currentModeIndex = 0; // Indice du mode actuel

    // Masquer tous les éléments sauf 'currentTime' au démarrage
    displayElements.forEach((element, index) => {
        if (index !== currentModeIndex) {
            element.style.display = 'none';
        }
    });

    // Masquer tous les textes au démarrage
    displayTextElements.forEach((element) => {
        element.style.display = 'none';
    });

    // Fonction pour basculer vers le mode suivant
    function toggleMode() {
        // Masquer le mode actuel
        displayElements[currentModeIndex].style.display = 'none';
        displayTextElements[textIndexMap[currentModeIndex]].style.display = 'none'; // Masquer le texte correspondant

        // Passer au mode suivant (circulairement)
        currentModeIndex = (currentModeIndex + 1) % displayElements.length;

        // Afficher le mode suivant
        displayElements[currentModeIndex].style.display = 'block';
        displayTextElements[textIndexMap[currentModeIndex]].style.display = 'block'; // Afficher le texte correspondant
    }

    // Écouter les clics sur le bouton Toggle (attaché une seule fois)
    const toggleButton = document.querySelector('.Toggle');
    toggleButton.addEventListener('click', toggleMode);
});




