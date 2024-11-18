const quizData = [
    {
        question: "Which city is famous for its canals and accessible boat tours?",
        options: ["Venice", "Sydney", "Kyoto"],
        answer: "Venice"
    },
    {
        question: "What is essential to pack for senior travelers?",
        options: ["Extra gadgets", "Lightweight luggage", "Heavy coats"],
        answer: "Lightweight luggage"
    },
    {
        question: "Why is travel insurance important?",
        options: ["To get discounts", "To cover emergencies", "To access VIP lounges"],
        answer: "To cover emergencies"
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option-btn");
        button.innerText = option;
        button.addEventListener("click", () => handleAnswer(option));
        optionsElement.appendChild(button);
    });
}

function handleAnswer(selected) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selected === correctAnswer) {
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is ${correctAnswer}.`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz complete!");
        currentQuestionIndex = 0;
        loadQuestion();
    }
}

nextBtn.addEventListener("click", loadQuestion);

// Initialize quiz
loadQuestion();
