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

//Array of questions and answers
const questionSetGenerator = () => new Array(
  ['Which movie did Nicolas Cage win an Academy award for best actor?', 'Con-Air', 'The Rock', 'Leaving Las Vegas', 'Ghost Rider', cAnswer, 'images/academyaward.jpg'],
  ["What was the name of Nicolas Cage's character in the critically acclaimed action movie, Face/Off?", 'Sean Archer', 'Castor Troy', 'Johnny Blaze', 'Dash Jones', bAnswer, 'images/faceoff.jpg'],
  ["What was the treasure the protagonists wanted to steal in the movie 'National Treasure'?", 'The Declaration of Independence', 'The Mona Lisa', 'The Florentine Diamond', 'Nazi Gold', aAnswer, 'images/nationaltreasure.jpg'],
  ['Which of the following Nicolas Cage movies was directed by legendary director David Lynch?', 'Wild at Heart', "Vampire's Kiss", 'Raising Arizona', 'Con-Air', aAnswer, 'images/cagelynch.jpg'],
  ["The was the goal of the big scheme in the movie 'Gone in Sixty Seconds'?", 'Stealing a series of cars', 'Completing a series of bank heists', 'Stealing a treasure of gold bars', 'Stealing exotic paintings', aAnswer, 'images/60seconds.jpg'],
  ['How many movies has Nicolas Cage been in as of 2021?', 'Between 50-75', 'Between 76-100', 'Between 101 and 125', 'Over 126', cAnswer, 'images/smilecage.png'],
  ['Which bizarre thing has Nicolas Cage NOT purchased?', 'A World War II era tank', 'A Tyrannosaurus skull', 'A haunted house', 'An octopus', aAnswer, 'images/cagethinking.jpg'],
  ["Which famous Hollywood director is Nicolas Cage's uncle?", 'George Lucas', 'Francis Ford Coppola', 'David Cronenberg', 'Mel Brooks', bAnswer, 'images/vampireskiss.jpg'],
  ["Why did the protagonists want to break into Alcatraz in the 90's action flick 'The Rock'?", 'To rescue a captured scientist', 'To rescue the President of The United States', 'To stop a chemical weapon attack', 'To find a hidden treasure', cAnswer, 'images/therock.jpg'],
  ["In what movie does Cage say his much meme'd line 'Not the bees!!'?", 'The Fly', 'The Wickerman', 'Snake Eyes', 'The Rock', bAnswer, 'images/bees.png'],
  ["In the movie 8mm what was Nicolas Cage's private investigator character hired to investigate?", 'A snuff film', 'A cheating lover', 'A stolen heirloom', 'A ponzi scheme', aAnswer, 'images/nic8mm.jpg'],
  ['What sporting event is the central focus of the movie Snake Eyes?', 'A basketball game', 'Craps ', 'A football game', 'A boxing match', dAnswer, 'images/snakeeyes.jpg'],
  ['In what movie does Nicolas Cage play a con artist who turns his life around to focus on raising his daughter?', 'Con Air', 'Face/Off', 'Adaptation', 'Matchstick Men', dAnswer, 'images/nicocd.png'],
);

const questions = questionSetGenerator();
let question;
let correctAnswers = 0;
let questionCounter = 0;

//Checks if the correct answer is selected and colorizes accordingly
const answerCheck = (correctAnswer) => {
  correctAnswer.nextElementSibling.style.color = 'green';
  if (!correctAnswer.checked) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].checked) {
        buttons[i].nextElementSibling.style.color = 'red';
      }
    }
  }
  return correctAnswer.checked;
};

//Disables button temporarily while player views question result
const buttonDisabler = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
};

//Reenables button
const buttonEnabler = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
};

//Displays the final results after answering 10 questions
const finalResults = (correctAnswers) => {
  $('#multiplechoice-form').style.display = 'none';
  const finalScore = (correctAnswers / 10) * 100;
  $('#finale').classList.add('fade-animation');
  $('#report-card').innerHTML = 'Cage Trivia Report Card:';
  $('#final-report').innerHTML = `You got ${correctAnswers} questions out of 10 correct.<br>Your final score is: ${finalScore}% . <br>If you scored 10/10, you're a true Cage-a-holic, otherwise level-up your Cage knowledge and play again!`;
  $('#final-report').nextElementSibling.src = 'images/CageAutograph.png';
  $('.finale');
  questionPic.src = 'images/niccagebook.jpg';
};

//Feeds the questions from the array into the form
const questionFormatter = (question) => {
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

//Chooses and random question from the array
const questionPicker = () => {
  const question = questions[Math.floor((Math.random()) * questions.length)];
  const questionIndex = questions.indexOf(question);
  if (questionIndex > -1) {
    questions.splice(questionIndex, 1);
    return question;
  }
};

//Restarts keyframe fadein animation for each image
const restartAnimation = () => {
  $('#animation-container').classList.remove('fade-animation');
  $('#multiplechoice-form').classList.remove('fade-animation');
  void $('#animation-container').offsetWidth;
  void $('#multiplechoice-form').offsetWidth;
  $('#animation-container').classList.add('fade-animation');
  $('#multiplechoice-form').classList.add('fade-animation');
  
};

//Hides the introduction screen and displays the game
const introGameHider = () => {
  $('.intro-collection').style.display = 'none';
  $('#multiplechoice-form').style.display = 'block';
};

//Checks if an radio button is selected
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

//Resets font color following green/red color change
const defaultFontColorSetter = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].nextElementSibling.style.color = '#AACCFF';
  }
};

//Prepares the game for the next question
const nextQuestionSetup = () => {
  $('#submit-button').disabled = true;
  buttonDisabler();
  setTimeout(() => {
    question = questionPicker();
    questionFormatter(question);
    restartAnimation();
  }, 1000);
};

//Reenables buttons post question
const reenableButtons = () => {
  setTimeout(() => {
    defaultFontColorSetter();
    buttonEnabler();
    $('#submit-button').disabled = false;
  }, 1000);
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
      answerConfirmedCorrect = answerCheck(question[5]);
      if (answerConfirmedCorrect) {
        correctAnswers += 1;
      }
      questionCounter += 1;
      nextQuestionSetup();
      reenableButtons();
      if (questionCounter > 10) {
        setTimeout(() => {
          finalResults(correctAnswers);
        }, 1000);
      }
    } else {
      $('#no-selection-warning').textContent = '*You must selection an option';
    }
  });
});
