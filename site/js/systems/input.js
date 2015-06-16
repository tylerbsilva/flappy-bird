var InputSystem = function(entities) {
  this.entities = entities;
  // Canvas is where we get input from
  this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
  this.canvas.addEventListener('click', this.onClick.bind(this));
  this.canvas.addEventListener('touchstart', this.onTouch.bind(this));
};

InputSystem.prototype.onClick = function() {
  //console.log('click');
  var bird = this.entities[2];
  bird.components.physics.velocity.y = 0.6;
};

InputSystem.prototype.onTouch = function(e) {
  //console.log('touch');
  e.preventDefault();
  var bird = this.entities[2];
  bird.components.physics.velocity.y = 0.6;
};

exports.InputSystem = InputSystem;
