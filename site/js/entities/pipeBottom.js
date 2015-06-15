var graphicsComponent = require("../components/graphics/pipeBottom");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeBottom = function() {
  this.size = {
    x: 0.1,
    y: 0.4
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 1;
  physics.velocity.x = -0.5;

  var graphics = new graphicsComponent.PipeBottomGraphicsComponent(this);
  var collision = new collisionComponent.RectCollisionComponent(this, this.size);

  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

PipeBottom.prototype.onCollision = function(entity) {
    console.log("PipeBottom collided with entity:", entity);
};

exports.PipeBottom = PipeBottom;
