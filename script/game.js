const letterContainer = document.getElementById('letter-container');
const playButton = document.getElementById('play-button');

let currentLetter = 'A';

function checkAnswer(selectedLetter) {
  const selectedLetterElement = event.target; 
  if (selectedLetter === currentLetter) {
    // Use the globally available showFireworks function
    window.showFireworks(selectedLetterElement); 
    selectedLetterElement.classList.add('correct'); 

    setTimeout(() => {
      selectedLetterElement.classList.remove('correct');
    }, 500);
  } else {
    // Handle incorrect answer
  }
}

// Event listener for letter clicks
letterContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('letter')) {
    checkAnswer(event.target.textContent);
  }
});

// Event listener for play button click
playButton.addEventListener('click', () => {
  // Use the globally available playLetterSound function
  window.playLetterSound(currentLetter); 
});
