var canvas;
var gameState = 0,quiz, contestantCount, database, quiz_question, contestant;
var contestantCount;
var allContestant;
var answer;

function setup()
{
  canvas = createCanvas(850,400);
  database= firebase.database();

  quiz = new Quiz()
  quiz.getState();
  quiz.start();
}


function draw()
{
  background("lightgreen");

  if(contestantCount === 4)
  {
    quiz.update(1);
  }

  if(gameState === 1)
  {
    clear();
    quiz.play();
  }
}
