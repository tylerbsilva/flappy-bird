var collisionSystem = require("./collision");
var timer = require("./timer");

var PhysicsSystem = function(entities) {
  this.entities = entities;
  this.collisionSystem = new collisionSystem.CollisionSystem(entities);
  this.timer = 0;
};

PhysicsSystem.prototype.run = function() {
  // Run the update loop
  this.timer = new timer.SetTimer(this.tick.bind(this), 1000/60);
};

PhysicsSystem.prototype.pause = function() {
  this.timer.pause();
};

PhysicsSystem.prototype.resume = function() {
  this.timer.resume();
};

PhysicsSystem.prototype.tick = function() {
  for (var i=0; i<this.entities.length; i++) {
    var entity = this.entities[i];
    if (!('physics' in entity.components)) {
      continue;
    }
    entity.components.physics.update(1/60);
  }
  this.collisionSystem.tick();
};

exports.PhysicsSystem = PhysicsSystem;
