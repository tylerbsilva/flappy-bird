var PipeBottomGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeBottomGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.fillStyle = "green";
    context.rect(0, 0, 0.1, 0.4);
    context.fill();
    context.restore();
};

exports.PipeBottomGraphicsComponent = PipeBottomGraphicsComponent;
