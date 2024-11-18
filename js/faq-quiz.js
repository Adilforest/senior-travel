document.addEventListener('DOMContentLoaded', () => {
    // === FAQ Accordion Logic ===
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(button => {
        button.addEventListener('click', () => {
            const accordionBody = button.nextElementSibling;

            // Переключение видимости текущего элемента
            if (accordionBody.style.display === 'block') {
                accordionBody.style.display = 'none';
            } else {
                accordionBody.style.display = 'block';
            }
        });
    });

    // Закрыть все вопросы, если пользователь нажимает вне FAQ
    document.addEventListener('click', (event) => {
        // Проверяем, кликнули ли по заголовку или его содержимому
        const clickedInsideFAQ = event.target.closest('.accordion-header') || event.target.closest('.accordion-body');

        if (!clickedInsideFAQ) {
            // Закрыть все вопросы
            document.querySelectorAll('.accordion-body').forEach(body => (body.style.display = 'none'));
        }
    });
});


    // === Quiz Logic ===
    const yesForm = document.getElementById('quiz-yes-form');
    const noForm = document.getElementById('quiz-no-form');

    // Логика переключения форм на основе выбора
    document.querySelectorAll('.quiz-button').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.getAttribute('data-answer');
            document.getElementById('step1').style.display = 'none'; // Скрыть первый шаг

            // Показать соответствующую форму
            if (answer === 'yes') {
                yesForm.style.display = 'block';
            } else if (answer === 'no') {
                noForm.style.display = 'block';
            }
        });
    });

    // === EmailJS Logic ===
    const sendEmail = (form) => {
        const formData = new FormData(form); // Сбор данных из формы
        const emailData = Object.fromEntries(formData.entries()); // Преобразование данных в объект

        // Обновлённый Template ID
        emailjs
            .send('service_dw3mcoa', 'template_av879u8', emailData, '1uUg2a4samzyV1xiV') // Новый Template ID и Public Key
            .then(() => {
                alert('Thank you for your feedback!');
                form.reset(); // Очистить форму
                form.style.display = 'none'; // Скрыть форму после отправки
            })
            .catch(error => {
                console.error('EmailJS Error:', error); // Логирование ошибок
                alert('Failed to send feedback. Please try again.');
            });
    };

    // Обработка отправки форм "Yes" и "No"
    if (yesForm) {
        yesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sendEmail(yesForm);
        });
    }

    if (noForm) {
        noForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sendEmail(noForm);
        });
    }
;
