var PipeTopGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeTopGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.fillStyle = "green";
    context.rect(0, 0.6, 0.1, 0.4);
    context.fill();
    context.restore();
};

exports.PipeTopGraphicsComponent = PipeTopGraphicsComponent;
