var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    //context.translate(position.x, position.y);
    context.beginPath();
    context.arc(position.x, position.y, 0.02, 0, 2 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath();
    context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
