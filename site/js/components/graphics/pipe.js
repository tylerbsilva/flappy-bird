var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context, position, size) {
  context.save();
  context.translate(position.x, position.y);
  context.scale(size, size);
  context.beginPath();
  context.rect(0, 0, 0, 0);
  context.fill();
  context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;
