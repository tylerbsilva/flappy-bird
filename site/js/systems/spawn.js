var timer = require('./timer');

var pipeTop = require('../entities/pipeTop');
var pipeBottom = require('../entities/pipeBottom');

var SpawnPipeSystem = function(entities) {
  this.entities = entities;
  this.timer = 0;
};

SpawnPipeSystem.prototype.run = function() {
  // Run the update loop
  this.timer = new timer.SetTimer(this.tick.bind(this), 2000);
};

SpawnPipeSystem.prototype.pause = function() {
  // Pause
  this.timer.pause();
};

SpawnPipeSystem.prototype.resume = function() {
  // Resume
  this.timer.resume();
};

SpawnPipeSystem.prototype.tick = function() {
  var arr = this.entities;
  arr.push(new pipeTop.PipeTop());
  arr.push(new pipeBottom.PipeBottom());
};

exports.SpawnPipeSystem = SpawnPipeSystem;
