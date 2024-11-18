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
});document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const scrollStep = 300; // Шаг прокрутки

    // Прокрутка вправо
    rightArrow.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: scrollStep,
            behavior: 'smooth',
        });
    });

    // Прокрутка влево
    leftArrow.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: -scrollStep,
            behavior: 'smooth',
        });
    });
});
