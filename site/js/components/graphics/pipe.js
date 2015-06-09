var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
    context.fillStyle = "green";
    context.rect(100, 100, 100,100);
    context.fill();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;
