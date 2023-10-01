function togglegame() {
    let currentTime = document.getElementById('currentTime');
    let body = document.body;
    let gameToggle = document.getElementById('gameToggle'); // Ciblez l'élément Game
  
    // Ciblez l'écran Game
    let screenGame = document.getElementById('screenGame');
  
    if (body.classList.contains('game-mode')) {
      // Si le mode "game" est déjà activé, désactivez-le
      body.classList.remove('game-mode');
      currentTime.classList.remove('game-mode');
      gameToggle.removeAttribute('disabled'); // Activez le bouton Game
  
      // Réduisez le z-index de l'écran Game pour le cacher derrière les autres éléments
      screenGame.style.zIndex = '0';
    } else {
      // Sinon, activez le mode "game"
      body.classList.add('game-mode');
      currentTime.classList.add('game-mode');
      gameToggle.setAttribute('disabled', 'true'); // Désactivez le bouton Game
  
      // Augmentez le z-index de l'écran Game pour le faire apparaître devant les autres éléments
      screenGame.style.zIndex = '9999';
    }
  }
  