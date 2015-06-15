var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Floor = function() {
  this.name = 'Floor';
  this.color = 'rgb(99,71,48)';
  this.size = {
    x: (document.getElementById('main-canvas').width),
    y: 0.02
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = -(document.getElementById('main-canvas').width)/2;
  physics.position.y = 0;

  var graphics = new graphicsComponent.RectGraphicsComponent(this);
  var collision = new collisionComponent.RectCollisionComponent(this, this.size);

  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

Floor.prototype.onCollision = function(entity) {

};

exports.Floor = Floor;
