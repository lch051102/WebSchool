var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var dino = {
  x:10,
  y:200,
  width: 50, 
  height: 50,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
dino.draw()


class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var cactus = new Cactus();
cactus.draw();

function 프레임(){
    requestAnimationFrame(프레임);
    cactus.x--;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    dino.draw();
    cactus.draw();
  
}
  
function Frame() {
    if (isUpPressed) {
      dino.y--;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dino.draw();
      cactus.draw();
    }
    else if (!isUpPressed) {
        dino.y++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dino.draw();
        cactus.draw();
    }
  
    requestAnimationFrame(Frame);
  }
  
  let isUpPressed = false;
  
  document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyW') {
        isUpPressed = true;
    }
  });
  
  document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyS') {
        isUpPressed = false;
    }
  });
  
  Frame();
  

프레임();