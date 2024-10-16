const letterContainer = document.getElementById('letter-container');
const letterAudio = document.getElementById('letter-audio');
const playButton = document.getElementById('play-button');
const confettiContainer = document.getElementById('confetti-container'); // Make sure you have this in your HTML

let currentLetter = 'A'; 

// Function to play the letter sound
function playLetterSound() {
  // Assuming your audio files are named 'A.m4a', 'B.m4a', etc.
  letterAudio.src = `audio/${currentLetter}.m4a`; 
  letterAudio.play();
}

function showFireworks(targetLetterElement) {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      const letterRect = targetLetterElement.getBoundingClientRect();
      const confettiLeft = letterRect.left + Math.random() * letterRect.width;
      confetti.style.left = confettiLeft + 'px';
      confetti.style.top = letterRect.top + 'px';
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.setProperty('--x-pos', (Math.random() * 20 - 10) + 'px'); 
      confetti.style.setProperty('--rotation', Math.random() * 360 + 'deg'); 
      confettiContainer.appendChild(confetti);
    }
  
    setTimeout(() => {
      confettiContainer.innerHTML = ''; // Clear confetti container
    }, 3000);
  }

// Function to get a random color for confetti
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to check the answer
function checkAnswer(selectedLetter) {
  const selectedLetterElement = event.target; 
  if (selectedLetter === currentLetter) {
    showFireworks(selectedLetterElement); // Trigger confetti on correct answer
    selectedLetterElement.classList.add('correct'); // Add shaking effect

    setTimeout(() => {
      selectedLetterElement.classList.remove('correct');
    }, 500);

  } else {
    // Handle incorrect answer (you might add feedback here)
  }
}

// Event listener for letter clicks
letterContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('letter')) {
    checkAnswer(event.target.textContent);
  }
});

// Event listener for play button click
playButton.addEventListener('click', playLetterSound);

