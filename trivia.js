"use strict"
const $ = (selector) => document.querySelector(selector);

const aChoice = $('.a-text');
const aAnswer = $('#a-radio');
console.log(aChoice);

const bChoice = $('.b-text');
const bAnswer = $('#b-radio');

const cChoice = $('.c-text');
const cAnswer = $('#c-radio');

const dChoice = $('.d-text');
const dAnswer = $('#d-radio');
console.log(dAnswer);

const questions = [['This is a test question', 'Wrong answer1', 'Wrong answer2', 'Wrong answer3', 'Correct Answer', dAnswer]];

aChoice.textContent = questions[0][1];
bChoice.textContent = questions[0][2];
cChoice.textContent = questions[0][3];
dChoice.textContent = questions[0][4];

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

document.addEventListener('DOMContentLoaded', () => {
  console.log('Event added');
  $('#submit-button').addEventListener('click', () => {
    answerCheck(dAnswer);
  });
});
