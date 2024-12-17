const correctAnswers = {
  1: "c",
  2: "c",
  3: "b",
  4: "b",
  5: "b",
  6: "c",
  7: "a",
  8: "c",
};

let score = 0; // Initialize score
let questionsAnswered = 0; // Track progress

// Function to check the answer
function checkAnswer(questionNumber, selectedAnswer) {
  if (selectedAnswer === correctAnswers[questionNumber]) {
    score++ // Increment score for correct answer
  }
  questionsAnswered++; // Increment questions answered

  // Disable buttons for the current question
  const buttons = document.querySelectorAll(
    `.question:nth-child(${questionNumber}) button`
  );
  buttons.forEach((button) => (button.disabled = true))

  // Check if all questions are answered
  if (questionsAnswered === Object.keys(correctAnswers).length) {
    showResult()
  }
}

// Function to show the result
function showResult() {
  document.getElementById("quiz-container").style.display = "none"
  const resultContainer = document.getElementById("result")
  resultContainer.style.display = "block"

  // Display the score
  document.getElementById("score").innerText = score

  // Display a message based on the score
  const message = document.getElementById("message")
  if (score >= 6) {
    message.innerText = "You're amazing!";
  } else if (score < 6 && score >= 4) {
    message.innerText = "Pretty close!"
  } else {
    message.innerText = "Well... at least you tried!"
  }
}