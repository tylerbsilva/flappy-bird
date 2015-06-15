!function i(t,n,o){function s(c,p){if(!n[c]){if(!t[c]){var h="function"==typeof require&&require;if(!p&&h)return h(c,!0);if(e)return e(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var l=n[c]={exports:{}};t[c][0].call(l.exports,function(i){var n=t[c][1][i];return s(n?n:i)},l,l.exports,i,t,n,o)}return n[c].exports}for(var e="function"==typeof require&&require,c=0;c<o.length;c++)s(o[c]);return s}({1:[function(i,t,n){var o=function(i,t){this.entity=i,this.radius=t,this.type="circle"};o.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},o.prototype.collideCircle=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,o=this.radius,s=i.components.collision.radius,e={x:t.x-n.x,y:t.y-n.y},c=e.x*e.x+e.y*e.y,p=o+s;return p*p>c},o.prototype.collideRect=function(i){var t=function(i,t,n){return t>i?t:i>n?n:i},n=this.entity.components.physics.position,o=i.components.physics.position,s=i.components.collision.size,e={x:t(n.x,o.x-s.x/2,o.x+s.x/2),y:t(n.y,o.y-s.y/2,o.y+s.y/2)},c=this.radius,p={x:n.x-e.x,y:n.y-e.y},h=p.x*p.x+p.y*p.y;return c*c>h},n.CircleCollisionComponent=o},{}],2:[function(i,t,n){var o=function(i,t){this.entity=i,this.size=t,this.type="rect"};o.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?(alert("RECT COLLIDE CIRCLE"),this.collideCircle(i)):"rect"==i.components.collision.type?this.collideRect(i):!1},o.prototype.collideCircle=function(i){return i.components.collision.collideRect(this.entity)},o.prototype.collideRect=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,o=this.size,s=i.components.collision.size,e={x:t.x+s.x/2,y:1==t.y?t.y-o.y/2:t.y+o.y/2},c={x:n.x+s.x/2,y:1==n.y?n.y-s.y/2:n.y+s.y/2},p=e.x-o.x/2,h=e.x+o.x/2,r=e.y-o.y/2,l=e.y+o.y/2,y=c.x-s.x/2,a=c.x+s.x/2,m=c.y-s.y/2,u=c.y+s.y/2;return!(p>a||y>h||r>u||m>l)},n.RectCollisionComponent=o},{}],3:[function(i,t,n){var o=function(i){this.entity=i};o.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.fillStyle="yellow",i.beginPath(),i.arc(0,0,.02,0,2*Math.PI),i.fill(),i.closePath(),i.restore()},n.BirdGraphicsComponent=o},{}],4:[function(i,t,n){var o=function(i){this.entity=i};o.prototype.draw=function(i){var t=this.entity.components.physics.position,n=this.entity.size;i.save(),i.rect(t.x,t.y,n.x,n.y),i.fillStyle="green",i.fill(),i.restore()},n.PipeBottomGraphicsComponent=o},{}],5:[function(i,t,n){var o=function(i){this.entity=i};o.prototype.draw=function(i){var t=this.entity.components.physics.position,n=this.entity.size;i.save(),i.fillStyle="green",i.rect(t.x,t.y,n.x,n.y),i.fill(),i.restore()},n.PipeTopGraphicsComponent=o},{}],6:[function(i,t,n){var o=function(i){this.entity=i,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};o.prototype.update=function(i){this.velocity.x+=this.acceleration.x*i,this.velocity.y+=this.acceleration.y*i,this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i},n.PhysicsComponent=o},{}],7:[function(i,t,n){var o=i("../components/physics/physics"),s=i("../components/graphics/bird"),e=i("../components/collision/circle"),c=function(){var i=new o.PhysicsComponent(this);i.position.y=.5,i.acceleration.y=-2;var t=new s.BirdGraphicsComponent(this),n=new e.CircleCollisionComponent(this,.02);n.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:n}};c.prototype.onCollision=function(i){console.log("Bird collided with entity:",i)},n.Bird=c},{"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":6}],8:[function(i,t,n){var o=i("../components/graphics/pipeBottom"),s=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.size={x:.2,y:.4};var i=new s.PhysicsComponent(this);i.position.x=1,i.position.y=0,i.velocity.x=-.5;var t=new o.PipeBottomGraphicsComponent(this,this.size),n=new e.RectCollisionComponent(this,this.size);this.components={physics:i,graphics:t,collision:n}};c.prototype.onCollision=function(i){console.log("PipeBottom collided with entity:",i)},n.PipeBottom=c},{"../components/collision/rect":2,"../components/graphics/pipeBottom":4,"../components/physics/physics":6}],9:[function(i,t,n){var o=i("../components/graphics/pipeTop"),s=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.size={x:.2,y:.4};var i=new s.PhysicsComponent(this);i.position.x=1,i.position.y=.6,i.velocity.x=-.5;var t=new o.PipeTopGraphicsComponent(this,this.size),n=new e.RectCollisionComponent(this,this.size);this.components={physics:i,graphics:t,collision:n}};c.prototype.onCollision=function(i){console.log("PipeTop collided with entity:",i)},n.PipeTop=c},{"../components/collision/rect":2,"../components/graphics/pipeTop":5,"../components/physics/physics":6}],10:[function(i,t,n){var o=i("./systems/graphics"),s=i("./systems/physics"),e=i("./systems/input"),c=(i("./systems/spawn"),i("./entities/bird")),p=i("./entities/pipeTop"),h=i("./entities/pipeBottom"),r=function(){this.entities=[new c.Bird,new p.PipeTop,new h.PipeBottom],this.graphics=new o.GraphicsSystem(this.entities),this.physics=new s.PhysicsSystem(this.entities),this.clicks=new e.InputSystem(this.entities)};r.prototype.run=function(){this.graphics.run(),this.physics.run(),this.clicks.run()},n.FlappyBird=r},{"./entities/bird":7,"./entities/pipeBottom":8,"./entities/pipeTop":9,"./systems/graphics":13,"./systems/input":14,"./systems/physics":15,"./systems/spawn":16}],11:[function(i,t,n){var o=i("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var i=new o.FlappyBird;i.run()})},{"./flappy_bird":10}],12:[function(i,t,n){var o=function(i){this.entities=i};o.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];if("collision"in t.components)for(var n=i+1;n<this.entities.length;n++){var o=this.entities[n];"collision"in o.components&&t.components.collision.collidesWith(o)&&(t.components.collision.onCollision&&t.components.collision.onCollision(o),o.components.collision.onCollision&&o.components.collision.onCollision(t))}}},n.CollisionSystem=o},{}],13:[function(i,t,n){var o=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};o.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},o.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var i=0;i<this.entities.length;i++){var t=this.entities[i];"graphics"in t.components&&t.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},n.GraphicsSystem=o},{}],14:[function(i,t,n){var o=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas")};o.prototype.run=function(){this.canvas.addEventListener("click",this.onClick.bind(this))},o.prototype.onClick=function(){var i=this.entities[0];i.components.physics.velocity.y=.7},n.InputSystem=o},{}],15:[function(i,t,n){var o=i("./collision"),s=function(i){this.entities=i,this.collisionSystem=new o.CollisionSystem(i)};s.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},s.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];"physics"in t.components&&t.components.physics.update(1/60)}this.collisionSystem.tick()},n.PhysicsSystem=s},{"./collision":12}],16:[function(i,t,n){var o=i("../entities/pipeTop"),s=i("../entities/pipeBottom"),e=function(i){this.entities=i};e.prototype.run=function(){window.setInterval(this.tick.bind(this),2e3)},e.prototype.tick=function(){var i=this.entities;i.push(new o.PipeTop),i.push(new s.PipeBottom)},n.SpawnPipeSystem=e},{"../entities/pipeBottom":8,"../entities/pipeTop":9}]},{},[11]);