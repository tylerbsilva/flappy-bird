var InputSystem = function(entities) {
  this.entities = entities;

  // Canvas is where we get input from
  this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
    this.canvas.addEventListener('click', this.onClick.bind(this));
    this.canvas.addEventListener('touchend', this.onClick.bind(this), false);
};

InputSystem.prototype.onClick = function() {
    var bird = this.entities[2];
    bird.components.physics.velocity.y = 0.6;
};

exports.InputSystem = InputSystem;
