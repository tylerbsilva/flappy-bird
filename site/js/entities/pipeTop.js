var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeTop = function() {
  this.name = "Pipe Top";
  this.color = 'green';

  this.size = {
    x: 0.1,
    y: 0.4
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 1.5;
  physics.position.y = 0.6;
  physics.velocity.x = -0.5;

  var graphics = new graphicsComponent.RectGraphicsComponent(this);
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
