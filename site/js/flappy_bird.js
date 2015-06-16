var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/spawn');
var collisionSystem = require('./systems/collision');
var scoreSystem = require('./systems/score');

var bird = require('./entities/bird');
var pipeTop = require('./entities/pipeTop');
var pipeBottom = require('./entities/pipeBottom');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');
var pipeDestroyer = require('./entities/pipeDestroyer');
var scorer = require('./entities/scorer');

var FlappyBird = function() {
  this.status = 0; // 0 - Start, 1 - Playing, 2 - Paused

  this.entities = [new floor.Floor(), new ceiling.Ceiling(), new bird.Bird(), new pipeDestroyer.PipeDestroyer(), new scorer.Scorer()];
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
  this.physics = new physicsSystem.PhysicsSystem(this.entities);
  this.clicks = new inputSystem.InputSystem(this.entities);
  this.pipes = new pipeSystem.SpawnPipeSystem(this.entities);
  this.collision = new collisionSystem.CollisionSystem(this.entities);
  this.score = new scoreSystem.ScoreSystem();
};

FlappyBird.prototype.start = function(){
  this.graphics.base();
};

FlappyBird.prototype.run = function() {
  this.graphics.run();
  this.physics.run();
  this.clicks.run();
  this.pipes.run();
};

FlappyBird.prototype.pause = function() {
  this.graphics.pause();
};

exports.FlappyBird = FlappyBird;
