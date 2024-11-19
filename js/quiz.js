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
document.addEventListener('DOMContentLoaded', () => {
    const showQuizBtn = document.getElementById('show-quiz-btn');
    const quizForm = document.getElementById('travel-quiz');
    const quizResult = document.getElementById('quiz-result');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    showQuizBtn.addEventListener('click', () => {
        showQuizBtn.style.display = 'none';
        quizForm.classList.remove('hidden');
        quizForm.style.display = 'block';
    });

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const answers = {
            q1: 'rolling',
            q2: 'both',
            q3: 'lost',
            q4: 'early',
            q5: 'find'
        };

        let score = 0;

        Object.keys(answers).forEach((question) => {
            const selected = quizForm[question].value;
            if (selected === answers[question]) {
                score += 1;
            }
        });

        // Отображение результата
        quizResult.textContent = `You scored ${score}/5! ${score === 5 ? 'Great job!' : 'Keep learning!'}`;
        quizResult.style.color = score === 5 ? 'green' : 'red';

        // Скрыть квиз и показать результат
        quizForm.style.display = 'none';
        quizResult.style.display = 'block';
        restartQuizBtn.style.display = 'block';
    });

    // Обработка кнопки "Пройти заново"
    restartQuizBtn.addEventListener('click', () => {
        quizForm.reset(); // Сброс квиза
        quizResult.style.display = 'none';
        restartQuizBtn.style.display = 'none';
        showQuizBtn.style.display = 'block';
    });
});
