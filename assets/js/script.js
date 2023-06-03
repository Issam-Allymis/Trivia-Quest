const questions = [
  {
    question: "What is the capital city of Spain?",
    answers: [
      {text: "Barcelona", correct: false}, 
      {text: "Madrid", correct: true}, 
      {text: "Valencia", correct: false}, 
    ],
  },
  {
    question: "Where is the tallest building in the world?",
    answers: [
      {text: "USA", correct: false}, 
      {text: "Italy", correct: false}, 
      {text: "Dubai", correct: true}, 
    ],
  },
  {
    question: "Which mammal holds the title for being the tallest?",
    answers: [
      {text: "Elephant", correct: false}, 
      {text: "Giraffe", correct: true},  
      {text: "Lion", correct: false}
  ],
  },
  {
    question: "What is the name of the longest river in Africa?",
    answers: [
      {text: "Niger", correct: false}, 
      {text: "Congo", correct: false}, 
      {text: "Nile", correct: true}, 
  ],
  },
  {
    question: "Who is the author of the book 'To Kill a Mockingbird'?",
    answers: [
      {text: "Harper Lee", correct: true}, 
      {text: "Darren Shan", correct: false}, 
      {text: "J.K. Rowling", correct: false}, 
    ] 
  },
  {
    question: "What is the world's largest ocean?",
    answers: [
      {text: "Atlantic", correct: false}, 
      {text: "Arctic", correct: false}, 
      {text: "Pacific", correct: true}
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      {text: "Leonardo da Vinci", correct: true},  
      {text: "Pablo Picasso", correct: false}, 
      {text: "Michelangelo", correct: false}
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers:  [
      {text: "Mars", correct: true}, 
      {text: "Jupiter", correct: false}, 
      {text: "Venus", correct: false}
    ]
  },
  {
    question: "In which city is the famous Taj Mahal located?",
    answers: [
      {text: "New Delhi", correct: false},
      {text: "Agra", correct: true}, 
      {text: "Mumbai", correct: false}
    ]
  },
  {
    question: "Who wrote the Harry Potter series?",
    answers: [
      {text: "J.K. Rowling", correct: true},
      {text: "Stephen King", correct: false},
      {text: "Suzanne Collins", correct: false},
    ]
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let scoreContainer = document.getElementById('score-container');
scoreContainer.innerHTML = `<h2>Score: <span id="score">0</span></h2>`;

let currentQuestionIndex = 0;
let score = 0;  

const quitButton = document.getElementById('quit-btn');
quitButton.addEventListener('click', quitGame);

const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', function() {
  startGame();
});

// Function to start the game
function startGame() {
  // Show the quit button
  quitButton.style.display = 'block';
  startButton.style.display = "none";
  scoreContainer.style.display = 'flex';
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.innerHTML = `<h2>Score: <span id="score">0</span></h2>`;
  nextButton.innerHTML = 'Next';
  showQuestion();
  const quizElements = document.getElementsByClassName('quiz')
  if (quizElements.length > 0) {
    quizElements[0].style.display = 'block';
  };
  answerButtons.style.display = 'block';
}

// Function to quit the game
function quitGame() {
  // Reset the game state and hide the quit button
  resetState();
  quitButton.style.display = 'none';
  startButton.style.display = 'block';
  answerButtons.style.display = 'none';
  scoreContainer.style.display = 'none';
}

// Function to display the current question
function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
  });
}

// Function to reset the state of the game
function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle the selection of an answer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    // Update the score
    document.getElementById('score').innerHTML = score;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(function(button) {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

// Function to show the final score
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
}

/**
 * Function to handle the click of the next button
 * Increments the currentQuestionIndex variable by 1. 
 * Moves to the next question or displays the final score.
 */
// Function to handle the next button click
function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Event listener for the next button
nextButton.addEventListener('click', function(){
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startGame();
  }
});



