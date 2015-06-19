var flappyBird = require('./flappy_bird');

// ON LOAD OF PAGE, RUN THE APP
document.addEventListener('DOMContentLoaded', function() {
  var app = new flappyBird.FlappyBird();
  app.start();
// WHEN THE PAGE IS CLICKED, START THE GAME
  var start = document.getElementById('start');
  start.addEventListener('click', function(){
    this.className = "hidden";
    app.status = 1;
    app.run();
  });
// WHEN SPACE IS HIT, PAUSE THE GAME
  document.addEventListener('keydown', function(e){
    if (e.keyCode == 32) {
      if(app.status == 1) {
        app.pause();
      } else if (app.status ==2) {
        app.resume();
      }
    }
  });
// WHEN PAUSE BUTTON IS PRESSED, PAUSE THE GAME
  var pause = document.getElementById('pauseButton');
  pause.addEventListener('click', function(){
    if(app.status == 1) {
      app.pause();
    } else if (app.status ==2) {
      app.resume();
    }
  });

// WHEN PAUSE BUTTON IS PRESSED, PAUSE THE GAME
  var resume = document.getElementById('resume');
  resume.addEventListener('click', function(){
    if(app.status == 1) {
      app.pause();
    } else if (app.status ==2) {
      app.resume();
    }
  });
  
// IF USER HASN'T CLICKED, THROW SOME ACCELERATION ON THEM PRIOR TO FIRST PIPE.
  var bird = app.entities[2];
  window.setInterval(function() {
    if (bird.components.physics.acceleration.y !== -1.5){
      bird.components.physics.acceleration.y = -1.5;
    }
  },3000);
});
