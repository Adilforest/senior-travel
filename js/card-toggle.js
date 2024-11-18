// Добавляем функциональность для кнопки "More"
document.addEventListener('DOMContentLoaded', () => {
    const moreButtons = document.querySelectorAll('.btn-more');

    moreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moreInfo = button.previousElementSibling; // Находим текст "more-info"
            
            if (moreInfo.style.display === 'none') {
                moreInfo.style.display = 'block';
                button.textContent = 'Less'; // Меняем текст кнопки
            } else {
                moreInfo.style.display = 'none';
                button.textContent = 'More'; // Возвращаем исходный текст
            }
        });
    });
});