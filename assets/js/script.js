document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  //older more generic for loop
  //for (let i = 0; i < buttons.length;i++)
  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "submit") {
              checkAnswer();
          } else {
              let gameType = this.getAttribute("data-type");
              runGame(gameType);
          }
      })
  }
})

let questions = [
    {
      question: "What is the capital city of Spain?",
      choices: ["Barcelona", "Madrid", "Valencia", "Seville"],
      correctAnswer: 1
    },
    {
      question: "What is the tallest building in the world?",
      choices: ["USA", "Italy", "Dubai", "Spain"],
      correctAnswer: 2
    },
    {
      question: "What is the tallest mammal?",
      choices: ["Elephant", "Giraffe", "Horse", "Lion"],
      correctAnswer: 1
    },
    {
      question: "What is the name of the longest river in Africa?",
      choices: ["Niger", "Congo", "Nile", "Zambezi"],
      correctAnswer: 2
    },
    {
      question: "What is the world's largest ocean?",
      choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3
    },
    {
      question: "Who wrote the Harry Potter series?",
      choices: ["J.K. Rowling", "Stephen King", "Suzanne Collins", "George R.R. Martin"],
      correctAnswer: 0
    }
  ];

// Retrieve DOM elements
const startBtn = document.getElementById("start-btn");
const usernameInput = document.getElementById("username");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const choiceButtons = document.querySelectorAll(".choice-btn");
