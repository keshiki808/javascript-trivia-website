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

const questionPrompt = $('#question-prompt');

const buttons = document.querySelectorAll('label input');

const questionSetGenerator = () => new Array(
  ['Which movie did Nicolas Cage win an Academy award for best actor?', 'Con-Air', 'The Rock', 'Leaving Las Vegas', 'Ghost Rider', cAnswer, 'images/academyaward.jpg'],
  ["What was the name of Nicolas Cage's character in the critically acclaimed action movie, Face/Off?", 'Sean Archer', 'Castor Troy', 'Johnny Blaze', 'Dash Jones', bAnswer, 'images/faceoff.jpg'],
  ["What was the treasure they wanted to steal in the movie 'National Treasure'?", 'The Declaration of Independence', 'The Mona Lisa', 'The Florentine Diamond', 'Nazi Gold', aAnswer, 'images/nationaltreasure.jpg'],
  ['Which of the following Nicolas Cage movies was directed by legendary director David Lynch?', 'Wild at Heart', "Vampire's Kiss", 'Raising Arizona', 'Con-Air', aAnswer, 'images/cagelynch.jpg'],
  ["The was the goal of the big scheme in the movie 'Gone in Sixty Seconds'?", 'Stealing a series of cars', 'Completing a series of bank heists', 'Stealing a treasure of gold bars', 'Stealing exotic paintings', aAnswer, 'images/60seconds.jpg'],
  ['How many movies has Nicolas Cage been in as of 2021?', 'Between 50-75', 'Between 76-100', 'Between 101 and 125', 'Over 126', cAnswer, 'images/smilecage.png'],
  ['Which bizarre thing has Nicolas Cage NOT purchased?', 'A World War 2 era tank', 'A Tyrannosaurus skull', 'A haunted house', 'an octopus', aAnswer, 'images/cagethinking.jpg'],
  ["Which famous Hollywood director is Nicolas Cage's uncle?", 'George Lucas', 'Francis Ford Coppola', 'David Cronenberg', 'Mel Brooks', bAnswer, 'images/vampireskiss.jpg'],
  ["Why did they want to break into Alcatraz in the 90's action flick 'The Rock'?", 'To rescue a captured scientist', 'To rescue the President of The United States', 'To stop a chemical weapon attack', 'To find a hidden treasure', cAnswer, 'images/therock.jpg'],
  ["What movie does Cage say his much meme'd line 'Not the bees!!'?", 'The Fly', 'The Wickerman', 'Snake Eyes', 'The Rock', bAnswer, 'images/bees.png'],
  ['In the movie 8mm what was private investigator Nicolas Cage hired to investigate?', 'A snuff film', 'A cheating lover', 'A stolen heirloom', 'A ponzi scheme', aAnswer, 'images/nic8mm.jpg'],
  ['What sporting event is the focus of the movie Snake Eyes?', 'A basketball game', 'Craps ', 'A football game', 'A boxing match', dAnswer, 'images/snakeeyes.jpg'],
  ['In what movie does Nicolas Cage play a con artist who changes gears to focus on raising his daughter?', 'Con Air', 'Face/Off', 'Adaptation', 'Matchstick Men', dAnswer, 'images/nicocd.png'],
);


const questions = questionSetGenerator();
let question;
let correctAnswers = 0;
let questionCounter = 0;

const answerCheck = (correctAnswer) => {
  return correctAnswer.checked};

const finalResults = (correctAnswers) => {
  $('#multiplechoice-form').style.display = 'none';
  const finalScore = (correctAnswers / 10) * 100;
  $('#report-card').innerHTML = 'Cage Trivia Report Card:';
  $('#final-report').innerHTML = `You've answered 10 Cage trivia questions.<br>You got ${correctAnswers} questions out of 10 correct.<br>Your final score is: ${finalScore}% . <br>If you scored 10/10, you're a true Cage-a-holic, otherwise level-up your Cage knowledge and play again`;
  questionPic.src = 'images/niccagebook.jpg';
};

const questionFormatter = (question) => {
  const buttons = document.querySelectorAll('label input');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].checked = false;
  }
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
  }
};

const restartAnimation = () => {
  $('#animation-container').classList.remove('fade-animation');
  void $('#animation-container').offsetWidth;
  $('#animation-container').classList.add('fade-animation');
};

const introGameHider = () => {
  $('.intro-collection').style.display = 'none';
  $('#multiplechoice-form').style.display = 'block';
};

const answerGivenChecker = () => {
  let answerGiven = false;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked == true) {
      answerGiven = true;
      $('#no-selection-warning').textContent = '';
    }
  }
  return answerGiven;
};

document.addEventListener('DOMContentLoaded', () => {
  $('#start-button').addEventListener('click', () => {
    introGameHider();
    question = questionPicker();
    questionFormatter(question);
    restartAnimation();
    questionCounter += 1;
  });

  $('#submit-button').addEventListener('click', () => {
    if (answerGivenChecker()) {
      confirmedAnswer = answerCheck(question[5]);
      if (confirmedAnswer) {
        correctAnswers += 1;
      }
      questionCounter += 1;
      if (questionCounter > 10) {
        finalResults(correctAnswers);
      } else {
        question = questionPicker();
        questionFormatter(question);
        restartAnimation();
      }
    } else {
      $('#no-selection-warning').textContent = '*You must selection an option';
    }
    
  });
});
