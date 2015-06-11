var pipeTop = require('../entities/pipeTop');
var pipeBottom = require('../entities/pipeBottom');

var SpawnPipeSystem = function(entities) {
  this.entities = entities;
};

SpawnPipeSystem.prototype.run = function() {
  // Run the update loop
  window.setInterval(this.tick.bind(this), 2000);
};

SpawnPipeSystem.prototype.tick = function() {
  console.log("Pipe!");
  var arr = this.entities;
  arr.push(new pipeTop.PipeTop());
  arr.push(new pipeBottom.PipeBottom());
};

exports.SpawnPipeSystem = SpawnPipeSystem;
