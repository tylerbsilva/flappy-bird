var PipeTopGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeTopGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    var size = this.entity.size;

    context.save();
    context.fillStyle = "green";
    context.rect(position.x, position.y, size.x, size.y);
    context.fill();
    context.restore();
};

exports.PipeTopGraphicsComponent = PipeTopGraphicsComponent;
