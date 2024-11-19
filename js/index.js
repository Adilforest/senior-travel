document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formData = {
            first_name: document.getElementById('firstName').value,
            last_name: document.getElementById('lastName').value,
            email: document.getElementById('email').value || 'No email provided',
            address: document.getElementById('address').value,
            feedback: document.getElementById('feedback').value,
        };

        console.log('Отправка данных через EmailJS:', formData);

        emailjs.send('service_vyykmdo', 'template_onditms', formData)
            .then(() => {
                alert('Thank you for your feedback!');
                form.reset();
                form.classList.remove('was-validated');
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert('Failed to send feedback. Please try again.');
            });
    });
});
