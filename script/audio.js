const letterAudio = document.getElementById('letter-audio');

function playLetterSound(currentLetter) { 
  letterAudio.src = `audio/${currentLetter}.m4a`; 
  letterAudio.play();
}

// Make the function available globally
window.playLetterSound = playLetterSound; 
