var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    var app = new flappyBird.FlappyBird();
    var app2 = new flappyBird.Pipe();
    app.run();
    app2.run();
});
