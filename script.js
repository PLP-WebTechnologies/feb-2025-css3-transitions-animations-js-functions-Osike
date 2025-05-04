// Function to store user preferences in localStorage
function saveColorPreference(color) {
    localStorage.setItem('backgroundColor', color);
}

// Function to retrieve user preferences from localStorage
function loadColorPreference() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('colorPicker').value = savedColor;
    }
}

// Function to trigger animation
function triggerAnimation() {
    const box = document.getElementById('animatedBox');
    box.classList.add('animate');
    
    // Remove animation class after animation ends
    box.addEventListener('animationend', () => {
        box.classList.remove('animate');
    }, { once: true });
}

// Event listener for button click to trigger animation
document.getElementById('animateButton').addEventListener('click', triggerAnimation);

// Event listener for color picker to save user preference
document.getElementById('colorPicker').addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
    saveColorPreference(selectedColor);
});

// Load saved color preference on page load
loadColorPreference();