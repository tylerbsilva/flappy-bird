var GraphicsSystem = function(entities) {
  this.entities = entities;
  // Canvas is where we draw
  this.canvas = document.getElementById('main-canvas');
  // Context is what we draw to
  this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function() {
  // Run the render loop
  window.requestAnimationFrame(this.tick.bind(this));
};

GraphicsSystem.prototype.tick = function() {
  // Set the canvas to the correct size if the window is resized
  if (this.canvas.width != this.canvas.offsetWidth || this.canvas.height != this.canvas.offsetHeight) {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
      }

  //clear last frame of animation
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  // save clear canvas
  this.context.save();
  // put origin of canvas at bottom-middle
  this.context.translate(this.canvas.width / 2, this.canvas.height);
  //flip canvas so y axis is upwards
  this.context.scale(this.canvas.height, -this.canvas.height);

  for (var i=0; i<this.entities.length; i++) {
    var entity = this.entities[i];
    //skip entity if no graphic present
    if (!('graphics' in entity.components)) {
      continue;
    }
    entity.components.graphics.draw(this.context);
  }
  this.drawGrid();
  this.context.restore();
  window.requestAnimationFrame(this.tick.bind(this));
};

//
// Function: Draw grid based on given gap size and how many lines should be drawn
// Provided by Vicky Leong
GraphicsSystem.prototype.drawGrid = function(gap, times) {
	this.gap   = gap   || 0.1;
	this.times = times || 10;
	this.context.lineWidth = 0.001;
	this.context.beginPath();
	for (var i = 0; i < (this.gap*this.times); i += this.gap) {
		// Positive y
		this.context.moveTo(-this.gap*this.times, i);
		this.context.lineTo( this.gap*this.times, i);
		// Negative y
		this.context.moveTo(-this.gap*this.times, -i);
		this.context.lineTo( this.gap*this.times, -i);
		// Positive x
		this.context.moveTo(i, -this.gap*this.times);
		this.context.lineTo(i,  this.gap*this.times);
		// Negative x
		this.context.moveTo(-i, -this.gap*this.times);
		this.context.lineTo(-i,  this.gap*this.times);
	}
	this.context.strokeStyle = "#AAA";
	this.context.stroke();
};

exports.GraphicsSystem = GraphicsSystem;
