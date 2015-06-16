var pipeTop = require('../entities/pipeTop');

var ScoreSystem = function() {
  // span that we're updating
  this.span = document.getElementById('score');
  // current score
  this.userScore = 0;
};

ScoreSystem.prototype.addOne = function() {
  this.userScore += 1;
  this.span.innerHTML = this.userScore;
};

ScoreSystem.prototype.reset = function() {
  this.userScore = 0;
  this.span.innerHTML = this.userScore;
};

exports.ScoreSystem = ScoreSystem;
