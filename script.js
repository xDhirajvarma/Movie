// Quotes
const quotes = [
    "It does not do to dwell on dreams and forget to live.",
    "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are."
  ];
  
  // Set random quote
  document.getElementById('quoteOfTheDay').textContent = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Quiz Data
  const triviaQuestions = [
    {
      question: "What is the name of Harry Potter's owl?",
      options: ["Hedwig", "Errol", "Pigwidgeon", "Crookshanks"],
      correctAnswer: "Hedwig"
    },
    {
      question: "What house is Harry Potter sorted into at Hogwarts?",
      options: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
      correctAnswer: "Gryffindor"
    },
    {
      question: "Who is the Potions Master at Hogwarts?",
      options: ["Albus Dumbledore", "Minerva McGonagall", "Severus Snape", "Rubeus Hagrid"],
      correctAnswer: "Severus Snape"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const question = triviaQuestions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option === question.correctAnswer);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(isCorrect) {
    if (isCorrect) score++;
    currentQuestion++;
    if (currentQuestion < triviaQuestions.length) {
      loadQuestion();
    } else {
      document.getElementById('quiz-container').innerHTML = `You scored ${score} out of ${triviaQuestions.length}`;
    }
  }
  
  document.getElementById('next-question').onclick = loadQuestion;
  
  // Load the first question
  loadQuestion();
  