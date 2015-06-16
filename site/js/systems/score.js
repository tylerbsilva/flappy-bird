var pipeTop = require('../entities/pipeTop');

var ScoreSystem = function() {
  // span that we're updating
  this.scoreSpan = document.getElementById('score');
  this.highSpan = document.getElementById('high-score');
  // current score
  this.userScore = 0;
  this.highScore = 0;
};

ScoreSystem.prototype.addOne = function() {
  // Add to score
  this.userScore += 1;
  // Update HTML
  this.scoreSpan.innerHTML = this.userScore;
};

ScoreSystem.prototype.reset = function() {
  // Chcek to see if you beat the high score
  if(this.userScore > this.highScore){
    this.highScore = this.userScore;
    this.highSpan.innerHTML = this.highScore;
  }
  // Set score back to zero
  this.userScore = 0;
  // Update HTML
  this.scoreSpan.innerHTML = this.userScore;
};


exports.ScoreSystem = ScoreSystem;
