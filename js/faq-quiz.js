document.addEventListener('DOMContentLoaded', () => {
    // === FAQ Accordion Logic ===
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(button => {
        button.addEventListener('click', () => {
            const accordionBody = button.nextElementSibling;

            if (accordionBody.style.display === 'block') {
                accordionBody.style.display = 'none';
            } else {
                accordionBody.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', (event) => {
        const clickedInsideFAQ = event.target.closest('.accordion-header') || event.target.closest('.accordion-body');

        if (!clickedInsideFAQ) {
            document.querySelectorAll('.accordion-body').forEach(body => (body.style.display = 'none'));
        }
    });
});


    // === Quiz Logic ===
    const yesForm = document.getElementById('quiz-yes-form');
    const noForm = document.getElementById('quiz-no-form');

    document.querySelectorAll('.quiz-button').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.getAttribute('data-answer');
            document.getElementById('step1').style.display = 'none'; г

            if (answer === 'yes') {
                yesForm.style.display = 'block';
            } else if (answer === 'no') {
                noForm.style.display = 'block';
            }
        });
    });

    // === EmailJS Logic ===
    const sendEmail = (form) => {
        const formData = new FormData(form);
        const emailData = Object.fromEntries(formData.entries()); 

        emailjs
            .send('service_dw3mcoa', 'template_av879u8', emailData, '1uUg2a4samzyV1xiV') 
            .then(() => {
                alert('Thank you for your feedback!');
                form.reset(); 
                form.style.display = 'none'; 
            })
            .catch(error => {
                console.error('EmailJS Error:', error); 
                alert('Failed to send feedback. Please try again.');
            });
    };

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
