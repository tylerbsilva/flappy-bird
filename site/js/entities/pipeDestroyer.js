var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeDestroyer = function() {
  this.name = 'PipeDestroyer';
  this.color = 'rgb(99,71,48)';
  this.size = {
    x: 0.001,
    y: 1
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = -(document.getElementById('main-canvas').width)/200;
  physics.position.y = 0.1;

  var graphics = new graphicsComponent.RectGraphicsComponent(this);
  var collision = new collisionComponent.RectCollisionComponent(this, this.size);
  collision.onCollision = this.onCollision.bind(this);

  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

PipeDestroyer.prototype.onCollision = function(entity) {
  //console.log("PipeDestroyer collided with entity:", entity);
};

exports.PipeDestroyer = PipeDestroyer;
