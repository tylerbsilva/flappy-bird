var graphicsComponent = require("../components/graphics/pipeBottom");
var physicsComponent = require("../components/physics/physics");

var PipeBottom = function() {
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 1;
  physics.velocity.x = -0.5;

  var graphics = new graphicsComponent.PipeBottomGraphicsComponent(this);

  this.components = {
    physics: physics,
    graphics: graphics,
  };
};

exports.PipeBottom = PipeBottom;
