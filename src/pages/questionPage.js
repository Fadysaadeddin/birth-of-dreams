

// import {
//   ANSWERS_LIST_ID,
//   NAVIGATION_ID,
//   USER_INTERFACE_ID,
// } from '../constants.js';
// import { createQuestionElement } from '../views/questionView.js';
// import { createAnswerElement } from '../views/answerView.js';
// import { quizData } from '../data.js';

// export const initQuestionPage = () => {
//   let currentQuestionIndex = 0;

//   const initQuestion = () => {
//     const userInterface = document.getElementById(USER_INTERFACE_ID);
//     userInterface.innerHTML = '';

//     const currentQuestion = quizData[currentQuestionIndex];
//     const questionElement = createQuestionElement(currentQuestion.questionText);
//     userInterface.appendChild(questionElement);

//     const answersListElement = document.getElementById(ANSWERS_LIST_ID);
//     answersListElement.innerHTML = "";

//     const nextQuestionButton = document.createElement('button');
//     nextQuestionButton.innerText = "Next Question";
//     nextQuestionButton.classList.add('next-question-button');
//     nextQuestionButton.disabled = true; 
//     nextQuestionButton.addEventListener('click', nextQuestion);

    
//     const skipQuestionButton = document.createElement('button');
//     skipQuestionButton.innerText = "Skip Question";
//     skipQuestionButton.classList.add('next-question-button');
//     skipQuestionButton.addEventListener('click', nextQuestion); 

    
//     currentQuestion.answerText.forEach(([answerText, isCorrect]) => {
//       const answerElement = createAnswerElement(answerText);
//       answerElement.classList.add('answer-btn');
//       answersListElement.appendChild(answerElement);

//       answerElement.addEventListener('click', () => {
      
//         nextQuestionButton.disabled = false;
//       });
//     });

 
//     const navigationContainer = document.getElementById(NAVIGATION_ID);
//     navigationContainer.innerHTML = "";
//     navigationContainer.appendChild(nextQuestionButton);
//     navigationContainer.appendChild(skipQuestionButton);
//   };

//   const nextQuestion = () => {
//     currentQuestionIndex += 1;

//     if (currentQuestionIndex < quizData.length) {
//       initQuestion();
//     } else {
//       alert('Quiz finished');
//     }
//   };

//   initQuestion();
// };


//   initQuestionPage();



//1111111111111111111111
// import {
//   ANSWERS_LIST_ID,
//   NAVIGATION_ID,
//   USER_INTERFACE_ID,
// } from '../constants.js';
// import { createQuestionElement } from '../views/questionView.js';
// import { createAnswerElement } from '../views/answerView.js';
// import { quizData } from '../data.js';

// export const initQuestionPage = () => {
//   let currentQuestionIndex = 0;

//   const initQuestion = () => {
//     const userInterface = document.getElementById(USER_INTERFACE_ID);
//     userInterface.innerHTML = '';

//     const currentQuestion = quizData[currentQuestionIndex];
//     const questionElement = createQuestionElement(currentQuestion.questionText);
//     userInterface.appendChild(questionElement);

//     const answersListElement = document.createElement('div');
//     answersListElement.id = ANSWERS_LIST_ID;
//     answersListElement.innerHTML = "";

//     const nextQuestionButton = document.createElement('button');
//     nextQuestionButton.innerText = "Next Question";
//     nextQuestionButton.classList.add('next-question-button');
//     nextQuestionButton.disabled = true; 
//     nextQuestionButton.addEventListener('click', nextQuestion);

    
//     const skipQuestionButton = document.createElement('button');
//     skipQuestionButton.innerText = "Skip Question";
//     skipQuestionButton.classList.add('next-question-button');
//     skipQuestionButton.addEventListener('click', nextQuestion); 

    
//     currentQuestion.answerText.forEach(([answerText, isCorrect]) => {
//       const answerElement = createAnswerElement(answerText);
//       answerElement.classList.add('answer-btn');
//       answersListElement.appendChild(answerElement);

//       answerElement.addEventListener('click', () => {
      
//         nextQuestionButton.disabled = false;
//       });
//     });

//     userInterface.appendChild(answersListElement);

//     const navigationContainer = document.createElement('div');
//     navigationContainer.id = NAVIGATION_ID;
//     navigationContainer.innerHTML = "";
    
//     navigationContainer.appendChild(skipQuestionButton);
//     navigationContainer.appendChild(nextQuestionButton);
    
//     userInterface.appendChild(navigationContainer);
//   };

//   const nextQuestion = () => {
//     currentQuestionIndex += 1;

//     if (currentQuestionIndex < quizData.length) {
//       initQuestion();
//     } else {
//       alert('Quiz finished');
//     }
//   };

//   initQuestion();
// };


//   initQuestionPage();


// 1111111111111111111111111111111111111111111111 

import {
  ANSWERS_LIST_ID,
  NAVIGATION_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  let currentQuestionIndex = 0;

  const initQuestion = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    // Get current question data
    const currentQuestion = quizData[currentQuestionIndex];

    // Display the question text
    const questionElement = createQuestionElement(currentQuestion.questionText);
    userInterface.appendChild(questionElement);

    // Create a container for answers
    const answersListElement = document.createElement('div');
    answersListElement.id = ANSWERS_LIST_ID;
    answersListElement.innerHTML = "";

    // Create the "Next Question" button (initially disabled)
    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.innerText = "Next Question";
    nextQuestionButton.classList.add('next-question-button');
    nextQuestionButton.disabled = true; 
    nextQuestionButton.addEventListener('click', nextQuestion);

    // Create the "Skip Question" button
    const skipQuestionButton = document.createElement('button');
    skipQuestionButton.innerText = "Skip Question";
    skipQuestionButton.classList.add('next-question-button');
    skipQuestionButton.addEventListener('click', nextQuestion); 

    // Generate answer buttons
    currentQuestion.answerText.forEach(([answerText, isCorrect]) => {
      const answerElement = createAnswerElement(answerText);
      answerElement.classList.add('answer-btn');
      answersListElement.appendChild(answerElement);

      // Add event listener for answer click
      answerElement.addEventListener('click', () => {
        // Disable all answer buttons after one is selected
        document.querySelectorAll('.answer-btn').forEach(btn => {
          btn.disabled = true;
        });

        // Check if the answer is correct
        if (isCorrect) {
          answerElement.classList.add('correct-answer');
        } else {
          answerElement.classList.add('incorrect-answer');

       
        }

        // Enable the "Next Question" button
        nextQuestionButton.disabled = false;
      });
    });

    userInterface.appendChild(answersListElement);

    // Create a container for navigation buttons (skip/next)
    const navigationContainer = document.createElement('div');
    navigationContainer.id = NAVIGATION_ID;
    navigationContainer.innerHTML = "";
    
    // Append buttons to the navigation container
    navigationContainer.appendChild(skipQuestionButton);
    navigationContainer.appendChild(nextQuestionButton);
    
    userInterface.appendChild(navigationContainer);
  };

  // Function to move to the next question
  const nextQuestion = () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      initQuestion();
    } else {
      alert('Quiz finished');
    }
  };

  // Initialize the first question
  initQuestion();
};

// Call the function to initialize the page
initQuestionPage();
