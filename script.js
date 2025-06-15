
let currentQuestion = 0;
let score = 0;
let lives = 3;

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("question").textContent = "Kamu telah menyelesaikan semua soal!";
    return;
  }
  document.getElementById("question").textContent = questions[currentQuestion].q;
  document.getElementById("answerInput").value = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].a.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "Benar!";
    score += 10;
    triggerConfetti();
    currentQuestion++;
    setTimeout(() => {
      document.getElementById("result").textContent = "";
      showQuestion();
    }, 1000);
  } else {
    document.getElementById("result").textContent = "Salah!";
    lives--;
    if (lives <= 0) {
      document.getElementById("question").textContent = "Game Over!";
    } else {
      setTimeout(() => {
        document.getElementById("result").textContent = "";
      }, 1000);
    }
  }

  document.getElementById("score").textContent = "Skor: " + score;
  document.getElementById("lives").textContent = "Sisa Nyawa: " + lives;
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  lives = 3;
  document.getElementById("score").textContent = "Skor: 0";
  document.getElementById("lives").textContent = "Sisa Nyawa: 3";
  document.getElementById("result").textContent = "";
  showQuestion();
}

function triggerConfetti() {
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 }
  });
}

window.onload = showQuestion;
