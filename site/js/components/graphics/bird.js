var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    context.beginPath();
    context.arc(200, 200, 10, 0, 2 * Math.PI);
    context.fill(200,30,204,100);
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
