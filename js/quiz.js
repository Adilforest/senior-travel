document.addEventListener('DOMContentLoaded', () => {
    // Select all toggle buttons
    const toggles = document.querySelectorAll('.lifehack-toggle');

    // Add event listeners to update button text
    toggles.forEach((toggle, index) => {
        toggle.addEventListener('change', () => {
            const label = document.querySelector(`label[for="toggle${index + 1}"]`);
            if (toggle.checked) {
                label.textContent = 'Less';
            } else {
                label.textContent = 'More detailed';
            }
        });
    });
});