var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
  var app = new flappyBird.FlappyBird();
  app.start();

  var start = document.getElementById('start');
  start.addEventListener('click', function(){
    this.className = "hidden";
    app.state = 1;
    app.run();
  });

  document.addEventListener('keydown', function(e){
    if (e.keyCode == 32) {
      alert("PAUSED");
    }
  });

  var pause = document.getElementById('pauseButton');
  pause.addEventListener('click', function(){
    alert('PAUSED');
  });
});
