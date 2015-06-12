var graphicsComponent = require("../components/graphics/pipeTop");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeTop = function() {
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 1;
  physics.velocity.x = -0.5;

  var graphics = new graphicsComponent.PipeTopGraphicsComponent(this);
  var collision = new collisionComponent.RectCollisionComponent(this, 0.1, 0.4);
  collision.onCollision = this.onCollision.bind(this);

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
