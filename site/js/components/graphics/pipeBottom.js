var PipeBottomGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeBottomGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    var size = this.entity.size;

    context.save();
    context.rect(position.x, position.y, size.x, size.y);
    context.fillStyle = "green";
    context.fill();
    context.restore();
};

exports.PipeBottomGraphicsComponent = PipeBottomGraphicsComponent;
