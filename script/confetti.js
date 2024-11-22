const confettiContainer = document.getElementById('confetti-container');

// Create confetti effect
function createConfetti() {
    const confettiCount = 100;
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#ffd700', '#4BB543', '#ff8c00', '#8e44ad'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${2 + Math.random() * 3}s`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
