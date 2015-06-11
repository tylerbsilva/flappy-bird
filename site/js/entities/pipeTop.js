var graphicsComponent = require("../components/graphics/pipeTop");
var physicsComponent = require("../components/physics/physics");

var PipeTop = function() {
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 1;
  physics.velocity.x = -0.5;

  var graphics = new graphicsComponent.PipeTopGraphicsComponent(this);

  this.components = {
    physics: physics,
    graphics: graphics,
  };
};

exports.PipeTop = PipeTop;
