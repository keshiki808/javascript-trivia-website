const $ = (selector) => document.querySelector(selector);

// constants for multiple choice text(labels) and answers(radio button selection)
const aChoice = $('#a-text');
const aAnswer = $('#a-radio');

const bChoice = $('#b-text');
const bAnswer = $('#b-radio');

const cChoice = $('#c-text');
const cAnswer = $('#c-radio');

const dChoice = $('#d-text');
const dAnswer = $('#d-radio');

const questionPic = $('#question-pic');

const questionPrompt = $("#question-prompt");


const questions = [['This is a test question', 'Wrong answer1', 'Wrong answer2', 'Wrong answer3', 'Correct Answer', dAnswer,"images/questionmark1.png"],
['This is a test question2', 'Wrong answerTest1', 'Wrong answerTest2', 'Wrong answerTest3', 'Correct AnswerTest2', dAnswer,"images/questionmark2.png"],
["Which movie did Nicolas Cage win an Academy award for best actor?", "Con-Air", "The Rock", "Leaving Las Vegas", "Ghost Rider", cAnswer,"images/questionmark1.png"],
["What was the name of Nicolas Cage's character in the critically acclaimed action movie, Face/Off?", "Sean Archer", "Castor Troy", "Johnny Blaze", "Dash Jones", bAnswer, "images/faceoff.jpg"],
["What was the treasure they wanted to steal in the movie 'National Treasure'?", "The Declaration of Independence", "The Mona Lisa", "The Florentine Diamond",  "Nazi Gold", aAnswer, "images/questionmark1.png"],
["Which of the following Nicolas Cage movies was directed by legendary director David Lynch?", "Wild at Heart", "Vampire's Kiss", "Raising Arizona", "Con-Air", aAnswer, "images/questionmark1.png" ],
["The was the goal of the big scheme in the movie 'Gone in Sixty Seconds'?", "Stealing a series of cars", "Completing a series of bank heists", "Stealing a treasure of gold bars", "Stealing a exotic paintings", aAnswer, "images/questionmark1.png"]]





const answerCheck = (correctAnswer) => {
  console.log('Button works');
  if (correctAnswer.checked) {
    console.log('Test');
    alert('Correct answer was chosen');
  } else {
    console.log('Test2');
    alert('Incorrect answer was chosen');
  }
};

const questionFormatter = (question) => {
  questionPrompt.textContent = question[0];
  aChoice.textContent = question[1];
  bChoice.textContent = question[2];
  cChoice.textContent = question[3];
  dChoice.textContent = question[4];
  questionPic.src = question[6];

};

const questionPicker = () => {
  const question = questions[Math.floor((Math.random()) * questions.length)];
  const questionIndex = questions.indexOf(question);
  if (questionIndex > -1) {
    questions.splice(questionIndex, 1);
    return question;
  };
};

// const questionRandomizer = () => {
//   // fisher-yates algorithm 
//   for(let i = questions.length — 1; i > 0; i--){
//     const j = Math.floor(Math.random() * i)
//     const temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  let question = questionPicker();
  questionFormatter(question);
  $('#submit-button').addEventListener('click', () => {
    answerCheck(question[5]);
    question = questionPicker();
    questionFormatter(question);
  });
});
