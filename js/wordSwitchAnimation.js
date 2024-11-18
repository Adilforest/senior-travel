const words = ["Love", "Entertainment", "Experience", "Friends"];
const container = document.getElementById("changeWord");
console.log(container)
let index = 0;

function replaceWord() {
    // Fade out the current word
    container.style.opacity = 0;

    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Change the word and fade it back in
        container.textContent = words[index];
        container.style.opacity = 1;

        // Update the index to show the next word
        index = (index + 1) % words.length;
    }, 500); // Delay matches the fade-out transition (0.5s)
}

// Replace the word every 2 seconds
setInterval(replaceWord, 2000);

// Start with the first word and fade it in
replaceWord();