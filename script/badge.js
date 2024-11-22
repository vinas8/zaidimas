// Function to create an image and append it to the badges div
function createImage(fileName) {
    const img = document.createElement('img');
    img.src = `img/badges/${fileName}`; // Use the fileName passed to the function
    img.alt = fileName; // Set the alt attribute for accessibility
    img.dataset.hintUsed = "false"; // Initialize hint usage for the badge
    const badgesDiv = document.getElementById('badges');
    badgesDiv.appendChild(img);
}

// Assuming fetchFileNames() is a function that returns an array of file names
async function loadAndDisplayBadges() {
    const names = await fetchFileNames(); // Fetch the file names (async call)

    // Iterate through the array of names and create images for each one
    names.forEach((fileName) => {
        createImage(fileName);
    });
}

async function fetchFileNames() {
    // Check if file names are already in localStorage
    const storedFileNames = localStorage.getItem('fileNames');

    if (storedFileNames) {
        // If file names are in localStorage, return them
        return JSON.parse(storedFileNames);
    }

    // If not, fetch the file names from the API
    const apiUrl = 'https://api.github.com/repos/vinas8/zaidimas/contents/img/badges';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Extract file names
        const fileNames = data.map(file => file.name);

        // Store the file names in localStorage
        localStorage.setItem('fileNames', JSON.stringify(fileNames));

        return fileNames;
    } catch (error) {
        console.error('Error fetching file names:', error);
        return [];
    }
}

// Function to show the image at the current index
function showNextImage() {
    const allImages = document.getElementById('badges').getElementsByTagName('img');

    [...allImages].forEach((img) => {
        img.addEventListener('click', () => {
            // Check if the badge's hint has already been used
            if (img.dataset.hintUsed === "false") {
                giveHint(currentLetter.char); // Show hint for the current letter
                img.style.display = 'none'; // Hide badge after use
                img.dataset.hintUsed = "true"; // Mark this badge's hint as used
            }
        });
    });

    // Ensure the current index is within bounds
    if (currentIndex < allImages.length) {
        allImages[currentIndex].style.display = 'block'; // Unhide the image
        currentIndex++; // Increment the index
    }
}

function giveHint(correctLetter) {
    const letterElements = document.querySelectorAll('.letter');
    const correctElement = [...letterElements].find(el => el.textContent === correctLetter);
    if (correctElement) {
        correctElement.classList.add('hint'); // Add a special class to highlight the correct letter
        setTimeout(() => {
            correctElement.classList.remove('hint'); // Remove the highlight after a brief time
        }, 2000);
    }
}
