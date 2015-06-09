var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');

var bird = require('./entities/bird');
//var pipe = require('./entities/pipe');

var FlappyBird = function() {
  this.entities = [new bird.Bird()];
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
  this.physics = new physicsSystem.PhysicsSystem(this.entities);
  this.clicks = new inputSystem.InputSystem(this.entities);
};

FlappyBird.prototype.run = function() {
  this.graphics.run();
  this.physics.run();
  this.clicks.run();
};

exports.FlappyBird = FlappyBird;
