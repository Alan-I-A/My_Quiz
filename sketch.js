var canvas;
var gameState = 0,game, contestantCount, database, quiz_question, contestant;
var contestantCount;
var allContestant;

function setup()
{
  canvas = createCanvas(850,400);

  game = new Quiz()
  game.getState();
  game.start();
}


function draw()
{
  background("lightgreen");
}
