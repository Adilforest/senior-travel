
document.addEventListener('DOMContentLoaded', () => {
    const moreButtons = document.querySelectorAll('.btn-more');

    moreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moreInfo = button.previousElementSibling; 
            
            if (moreInfo.style.display === 'none') {
                moreInfo.style.display = 'block';
                button.textContent = 'Less'; 
            } else {
                moreInfo.style.display = 'none';
                button.textContent = 'More'; 
            }
        });
    });
});document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const scrollStep = 300; 

    rightArrow.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: scrollStep,
            behavior: 'smooth',
        });
    });

    leftArrow.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: -scrollStep,
            behavior: 'smooth',
        });
    });
});
