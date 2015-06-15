var graphicsComponent = require("../components/graphics/pipeTop");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeTop = function() {
  this.size = {
    x: 0.2,
    y: 0.4
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 1;
  physics.position.y = 0.6;
  physics.velocity.x = -0.5;

  var graphics = new graphicsComponent.PipeTopGraphicsComponent(this, this.size);
  var collision = new collisionComponent.RectCollisionComponent(this, this.size);

  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

PipeTop.prototype.onCollision = function(entity) {
  console.log("PipeTop collided with entity:", entity);
};

exports.PipeTop = PipeTop;
