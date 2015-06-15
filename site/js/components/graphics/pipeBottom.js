var PipeBottomGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeBottomGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    var size = this.entity.size;
    var color = this.entity.color;

    context.save();
    context.fillStyle = color;
    context.fillRect(position.x, position.y, size.x, size.y);
    context.restore();
};

exports.PipeBottomGraphicsComponent = PipeBottomGraphicsComponent;
