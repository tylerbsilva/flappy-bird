var physicsComponent = require("../components/physics/physics");
var graphicsComponent = require("../components/graphics/bird");
var collisionComponent = require("../components/collision/circle");

var Bird = function() {
  this.name = 'bird';
  this.color = 'yellow';
  this.radius = 0.02;

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 0;
  physics.position.y = 0.5;
  physics.acceleration.y = -1.75;

  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
  var collision = new collisionComponent.CircleCollisionComponent(this, this.radius);
  collision.onCollision = this.onCollision.bind(this);

  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

Bird.prototype.onCollision = function(entity) {
  console.log("Bird collided with entity:", entity);
  this.components.physics.position.y = 0.5;
  this.components.physics.position.x = 0;
};

exports.Bird = Bird;
