var pipe = require('../entities/pipe');

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
  arr.push(new pipe.Pipe());
};

exports.SpawnPipeSystem = SpawnPipeSystem;
