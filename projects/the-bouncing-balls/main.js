// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const score = document.querySelector('p');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// const wKey = document.getElementById('w');
// const aKey = document.getElementById('a');
// const sKey = document.getElementById('s');
// const dKey = document.getElementById('d');
// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
//define Shape constructor
 function Shape(x,y,velX, velY,exists) {
   this.x = x;
   this.y = y;
   this.velX = velX;
   this.velY = velY;
   this.exists = exists;
 }

//  Shape.prototype._exists = function() {

//   if (!(this.exists)){
//     this.color = 'rgba(0,0,0,0)'
//   }
 
 
//}
// define Ball constructor

function Ball(x, y, velX, velY, color, size) {
 Shape.call(this, x, y, velX, velY, true)
  this.color = color;
  this.size = size;
}
Ball.prototype = Object.create(Shape.prototype);

Object.defineProperty(Ball.prototype, 'constructor', {
  value : Ball,
  enumerable : false,
  writable : true
});
// define ball draw method

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// define ball update method

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j]) && balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';

      }
    }
  }
}
 
// define array to store balls and populate it

let balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the adge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}
function EvilCircle(x, y){
  Shape.call(this, x, y, 20, 20, true)
this.color = 'white';
this.size = 10;

} 
EvilCircle.prototype = Object.create(Shape.prototype);

Object.defineProperty(EvilCircle.prototype, 'constructor' ,{
  value: EvilCircle,
  writable: true,
  enumerable: false
})

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};


EvilCircle.prototype.checkBounds = function() {

  if(this.x >= width - this.size){
  this.x -= 50;
  }
  if(this.x <= 0 + this.size){
    this.x += 50;
  }
  if(this.y >= height - this.size){
    this.y -= 50;
  }
  if (this.y <= 0 + this.size){
    this.y += 50;
  }
}
EvilCircle.prototype.setControls = function(){
  let _this = this;

  // aKey.onclick = function(){
    // _this.x -= _this.velX
  // }
  // dKey.onclick = function(){
    // _this.x += _this.velX
  // }
  // wKey.onclick = function(){
    // _this.y -= _this.velY
  // }
  // sKey.onclick = function(){
    // _this.y += _this.velY
  // }
  
  
  window.onkeypress = function(event) {
    if(event.key === 'a'){
      _this.x -= _this.velX
    }
    if(event.key === 'd'){
      _this.x += _this.velY
    }
    if(event.key === 'w'){
      _this.y -= _this.velX
    }
    if(event.key === 's'){
      _this.y += _this.velY
    }
  }
}
let scoreNumb = 0;
EvilCircle.prototype.collisionDetect = function(){
  let k = 0;
  
  while(k < balls.length){
    
    if(balls[k].exists){
      const dx = this.x - balls[k].x;
      const dy = this.y - balls[k].y;
      const distance = Math.sqrt((dx*dx) + (dy*dy)); 
      if(distance < this.size + balls[k].size){
        balls[k].exists = false;
        scoreNumb++;
        score.innerHTML = `Your score : ${scoreNumb}`;
      }
    }
    k++
  }
}
// define loop that keeps drawing the scene constantly
let evilBall = new EvilCircle(100, 100);
evilBall.setControls();


function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    if(balls[i].exists){
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();

    
    // balls[i]._exists();
    }
    
  }
evilBall.draw();
evilBall.collisionDetect();
evilBall.checkBounds();


  requestAnimationFrame(loop);
}

loop();