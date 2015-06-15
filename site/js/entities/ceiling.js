var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Ceiling = function() {
  this.name = 'Ceiling';
  this.color = 'brown';
  this.size = {
    x: 1,
    y: 0.02
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 0;
  physics.position.y = 1;

  var graphics = new graphicsComponent.RectGraphicsComponent(this);
  var collision = new collisionComponent.RectCollisionComponent(this, this.size);

  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

Ceiling.prototype.onCollision = function(entity) {

};

exports.Ceiling = Ceiling;
