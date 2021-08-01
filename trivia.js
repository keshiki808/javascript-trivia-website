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

const questionSetGenerator = () => {
  return new Array(
["Which movie did Nicolas Cage win an Academy award for best actor?", "Con-Air", "The Rock", "Leaving Las Vegas", "Ghost Rider", cAnswer,"images/academyaward.jpg"],
["What was the name of Nicolas Cage's character in the critically acclaimed action movie, Face/Off?", "Sean Archer", "Castor Troy", "Johnny Blaze", "Dash Jones", bAnswer, "images/faceoff.jpg"],
["What was the treasure they wanted to steal in the movie 'National Treasure'?", "The Declaration of Independence", "The Mona Lisa", "The Florentine Diamond",  "Nazi Gold", aAnswer, "images/nationaltreasure.jpg"],
["Which of the following Nicolas Cage movies was directed by legendary director David Lynch?", "Wild at Heart", "Vampire's Kiss", "Raising Arizona", "Con-Air", aAnswer, "images/cagelynch.jpg" ],
["The was the goal of the big scheme in the movie 'Gone in Sixty Seconds'?", "Stealing a series of cars", "Completing a series of bank heists", "Stealing a treasure of gold bars", "Stealing exotic paintings", aAnswer, "images/60seconds.jpg"],
["How many movies has Nicolas Cage been in as of 2021?", "Between 50-75", "Between 76-100","Between 101 and 125", "Over 126", cAnswer, "images/smilecage.png"],
["Which bizarre thing has Nicolas Cage NOT purchased?", "A World War 2 era tank", "A Tyrannosaurus skull", "A haunted house", "an octopus", aAnswer, "images/cagethinking.jpg"],
["Which famous Hollywood director is Nicolas Cage's uncle?", "George Lucas", "Francis Ford Coppola", "David Cronenberg", "Mel Brooks", bAnswer, "images/vampireskiss.jpg"],
["Why did they want to break into Alcatraz in the 90's action flick 'The Rock'?","To rescue a captured scientist","To rescue the President of The United States", "To stop a chemical weapon attack", "To find a hidden treasure", cAnswer, "images/therock.jpg"],
["What movie does Cage say his much meme'd line 'Not the bees!!'?", "The Fly", "The Wickerman", "Snake Eyes", "The Rock", bAnswer, "images/bees.png"],
["In what critically acclaimed movie does Nicolas Cage play quirky twin brother screenwriters?", "Snake Eyes", "Matchstick Men", "8mm", "Adaptation", dAnswer, "images/twins.jpg"])
  }

let questions = questionSetGenerator();
let question;
let correctAnswers = 0;
let questionCounter = 0;

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
  $('#start-button').addEventListener('click',()=>{
    $('.intro-collection').style.display = "none";
    $('#multiplechoice-form').style.display = "block";
    question = questionPicker();
    questionFormatter(question);
  })
  $('#submit-button').addEventListener('click', () => {
    answerCheck(question[5]);
    question = questionPicker();
    questionFormatter(question);
  });


});
