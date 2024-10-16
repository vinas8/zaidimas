const confettiContainer = document.getElementById('confetti-container');

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
    confettiContainer.innerHTML = ''; 
  }, 3000);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Make the function available globally
window.showFireworks = showFireworks;
