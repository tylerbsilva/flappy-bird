var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/spawn');
var collisionSystem = require('./systems/collision');

var bird = require('./entities/bird');
var pipeTop = require('./entities/pipeTop');
var pipeBottom = require('./entities/pipeBottom');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');
var pipeDestroyer = require('./entities/pipeDestroyer');

var FlappyBird = function() {
  this.entities = [new floor.Floor(), new ceiling.Ceiling(), new bird.Bird(), new pipeDestroyer.PipeDestroyer()];
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
  this.physics = new physicsSystem.PhysicsSystem(this.entities);
  this.clicks = new inputSystem.InputSystem(this.entities);
  this.pipes = new pipeSystem.SpawnPipeSystem(this.entities);
  this.collision = new collisionSystem.CollisionSystem(this.entities);
};

FlappyBird.prototype.run = function() {
  this.graphics.run();
  this.physics.run();
  this.clicks.run();
  this.pipes.run();
};

exports.FlappyBird = FlappyBird;
