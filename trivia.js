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


const questions = [['This is a test question', 'Wrong answer1', 'Wrong answer2', 'Wrong answer3', 'Correct Answer', dAnswer],
  ['This is a test question', 'Wrong answerTest1', 'Wrong answerTest2', 'Wrong answerTest3', 'Correct AnswerTest2', dAnswer]];

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
  aChoice.textContent = question[1];
  bChoice.textContent = question[2];
  cChoice.textContent = question[3];
  dChoice.textContent = question[4];
};

const questionPicker = (questionIndex) => {
  // const question = questions[Math.floor((Math.random()) * questions.length)];
  // const questionIndex = questions.indexOf(question);
  // if (questionIndex > -1) {
  //   questions.splice(questionIndex, 1);
  //   return question;

  }
};

const questionRandomizer = () => {
  // fisher-yates algorithm 
  for(let i = questions.length — 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let question = questionPicker();
  questionFormatter(question);
  $('#submit-button').addEventListener('click', () => {
    answerCheck(question[5]);
    question = questionPicker();
    questionFormatter(question);
  });
});
