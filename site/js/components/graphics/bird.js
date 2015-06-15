var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    var radius = this.entity.radius;
    var color = this.entity.color;

    context.save();
    context.beginPath();
    context.fillStyle = color;
    context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    context.fill();
    context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
