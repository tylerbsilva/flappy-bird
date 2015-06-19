var scoreSystem = require('./score');
var graphicsSystem = require('./graphics');

var bird = require('../entities/bird');
var pipeTop = require('../entities/pipeTop');
var pipeDestroyer = require('../entities/pipeDestroyer');
var scorer = require('../entities/scorer');

var CollisionSystem = function(entities, physics) {
  this.entities = entities;
  this.physics = physics;
  this.scoreSystem = new scoreSystem.ScoreSystem();
  this.graphicsSystem = new graphicsSystem.GraphicsSystem();
};

CollisionSystem.prototype.run = function() {
  window.setInterval(this.tick.bind(this), 1000 /60);
};

CollisionSystem.prototype.tick = function() {
  // loop to find first entity
  for (var i=0; i<this.entities.length; i++) {
    var entityA = this.entities[i];
    //skips to next entity if there are no  collision component
    if (!('collision' in entityA.components)) {
      continue;
    }
    // second loop to find next entity
    for (var j=i+1; j<this.entities.length; j++) {
      var entityB = this.entities[j];
      //skips to next entitiy if no collision component
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
          this.scoreSystem.reset();
        }

        if (entityA instanceof pipeDestroyer.PipeDestroyer){
          //takes 2 pipes off that are off screen
          this.entities.splice(5,2);
        }

        if (entityA instanceof scorer.Scorer && entityB instanceof pipeTop.PipeTop){
          //Add to score
          //console.log('+1');
          this.scoreSystem.addOne();
        }

      }

      if (entityB.components.collision.onCollision) {
        entityB.components.collision.onCollision(entityA);
        if (entityB instanceof bird.Bird) {
          //takes all pipes off
          this.entities.splice(5, this.entities.length-5);
          this.scoreSystem.reset();
        }

      }

    }
  }
};

exports.CollisionSystem = CollisionSystem;
