var bird = require('../entities/bird');
var pipeTop = require('../entities/bird');
var pipeBottom = require('../entities/bird');
var floor = require('../entities/floor');
var ceiling = require('../entities/ceiling');
var pipeDestroyer = require('../entities/pipeDestroyer');
var score = require('../entities/score');

var CollisionSystem = function(entities) {
  this.entities = entities;
};

CollisionSystem.prototype.run = function() {
  window.setInterval(this.tick.bind(this), 1000 /60);
};

CollisionSystem.prototype.tick = function() {
  for (var i=0; i<this.entities.length; i++) {
    var entityA = this.entities[i];
    //skips to next entity if there are no components
    if (!('collision' in entityA.components)) {
      continue;
    }

    for (var j=i+1; j<this.entities.length; j++) {
      var entityB = this.entities[j];
      if (!('collision' in entityB.components)) {
        continue;
      }

      if (!(entityA.components.collision.collidesWith(entityB))) {
        continue;
      }

      if (entityA.components.collision.onCollision) {
        entityA.components.collision.onCollision(entityB);

        if (entityA instanceof bird.Bird) {
          //takes all pipes off
          this.entities.splice(5, this.entities.length-5);
        }

        if (entityA instanceof pipeDestroyer.PipeDestroyer){
          //takes 2 pipes off that are off screen
          this.entities.splice(5,2);
        }

      }

      if (entityB.components.collision.onCollision) {
        entityB.components.collision.onCollision(entityA);

        if (entityB instanceof bird.Bird) {
          //takes all pipes off
          this.entities.splice(5, this.entities.length-5);
        }

        if (entityB instanceof pipeDestroyer.PipeDestroyer){
          //takes 2 pipes off that are off screen
          this.entities.splice(5,2);
        }


      }

    }
  }
};

exports.CollisionSystem = CollisionSystem;
