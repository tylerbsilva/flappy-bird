var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Score = function() {
  this.name = 'PipeDestroyer';
  this.color = 'rgba(226,162,111,100)';
  this.size = {
    x: 0.001,
    y: 0.2
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = -0.15;
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

Score.prototype.onCollision = function(entity) {
  console.log("YAY, BIRD FLEW THROUGH:", entity);
};

exports.Score = Score;
