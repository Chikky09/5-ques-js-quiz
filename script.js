const quizData = {
  questions: [
    {
      question: "I have keys but I can't open any door. What am I?",
      options: ["Piano", "Car", "Laptop", "Bottle"],
      answer: "Piano"
    },
    {
      question: "I have a face and two hands, but no arms or legs. What am I?",
      options: ["Robot", "Clock", "Cat", "Human toy"],
      answer: "Clock"
    },
    {
      question: "I can fly without wings, I can cry without eyes. What am I?",
      options: ["Cloud", "Bird", "Ballon", "Rocket"],
      answer: "Cloud"
    },
    {
      question: "I get wet while drying others. What am I?",
      options: ["Rain", "Towel", "Soap", "Leaf"],
      answer: "Towel"
    },
    {
      question: "I am full of holes but I still hold water. What am I?",
      options: [
        "Bucket",
        "Sponge",
        "Cup",
        "Paper"
      ],
      answer: "Sponge"
    }
  ]
};

let currentQuestion = 0;
let score = 0;
let selectedAnswers = new Array(quizData.questions.length).fill(null);

function loadQuestion() {
    document.getElementById("question-number").textContent = `Question ${currentQuestion + 1} of ${quizData.questions.length}`;
  const questionData = quizData.questions[currentQuestion];
  document.getElementById("question").textContent = questionData.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  questionData.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = selectedAnswers[currentQuestion] === option ? "selected" : "";
    button.onclick = () => {
      selectedAnswers[currentQuestion] = option;
      loadQuestion(); // refresh to show selection
    };
    optionsContainer.appendChild(button);
  });

  // Toggle button visibility
  document.getElementById("prev-btn").style.display = currentQuestion === 0 ? "none" : "inline-block";
  document.getElementById("next-btn").style.display = currentQuestion === quizData.questions.length - 1 ? "none" : "inline-block";
  document.getElementById("submit-btn").style.display = currentQuestion === quizData.questions.length - 1 ? "inline-block" : "none";
}

function nextQuestion() {
  if (currentQuestion < quizData.questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function submitQuiz() {
  score = 0;
  quizData.questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) {
      score++;
    }
  });

  document.getElementById("quiz-container").innerHTML =
    `<h2>Quiz Completed!!</h2><p>Your Score: ${score} / ${quizData.questions.length}</p>`;
}

window.onload = loadQuestion;