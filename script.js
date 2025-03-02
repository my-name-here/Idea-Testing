function resetHighlights() {
    const winterWords = document.querySelectorAll('.winter-highlight-word');
    winterWords.forEach(word => {
        word.classList.remove('winter-highlight-active');
        word.classList.add('no-highlight');
    });

    const lightDarkWords = document.querySelectorAll('.light-dark-highlight-word');
    lightDarkWords.forEach(word => {
        word.classList.remove('light-dark-highlight-active');
        word.classList.add('no-highlight');
    });
}

function highlightWinter() {
    resetHighlights(); // First reset any existing highlights
    const winterWords = document.querySelectorAll('.winter-highlight-word');
    winterWords.forEach(word => {
        word.classList.remove('no-highlight');
        word.classList.add('winter-highlight-active');
    });
}

function highlightLightDark() {
    resetHighlights(); // First reset any existing highlights
    const lightDarkWords = document.querySelectorAll('.light-dark-highlight-word');
    lightDarkWords.forEach(word => {
        word.classList.remove('no-highlight');
        word.classList.add('light-dark-highlight-active');
    });
}

// Event listeners for buttons
document.getElementById('resetButton').addEventListener('click', resetHighlights);
document.getElementById('winterButton').addEventListener('click', highlightWinter);
document.getElementById('lightDarkButton').addEventListener('click', highlightLightDark);