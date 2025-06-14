const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "Shakespeare", "Jane Austen", "J.K. Rowling"],
      answer: "Shakespeare"
    }
  ];
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  function showQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(btn, option);
      optionsDiv.appendChild(btn);
    });
  }
  function checkAnswer(button, selected) {
    if (answered) return; // Prevent multiple answers
    answered = true;
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      score++;
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red"; // highlight correct answer
      [...document.querySelectorAll("#options button")].forEach(btn => {
        if (btn.textContent === correct) {
          btn.style.backgroundColor = "green";
        }
      });
    }
    document.getElementById("score").textContent = `Score: ${score}`; // Disable all buttons
    [...document.querySelectorAll("#options button")].forEach(btn => {
      btn.disabled = true;
    });
  }
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      document.getElementById("question-box").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score is ${score} out of ${questions.length}</p>
      `;
    }
  }
  showQuestion();
  