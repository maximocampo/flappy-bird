var canvas = document.getElementById('main-game')
var ctx = canvas.getContext('2d')

function Board(){
  this.x = 0;
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height;
  this.img = new Image();
  this.img.src = "http://ellisonleao.github.io/clumsy-bird/data/img/bg.png"
  this.score = 0;


  this.img.onload = function(){
    this.draw()
  }.bind(this)

  this.move = function(){
    this.x--;
    if(this.x < -this.width) this.x = 0;
  }

  this.draw = function(){
    this.move()
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img,this.x + this.width, this.y, this.width, this.height)
    ctx.font = '50px sans-serif'
    ctx.fillStyle = 'white'
    ctx.fillText(this.score,this.width/2 - 15,this.y + 50)
  }
}

function Flappy(){
  this.x = 150;
  this.y = 180;
  this.width = 50;
  this.height = 50;
  this.img = new Image()
  this.img.src = 'https://lh3.googleusercontent.com/k6c5BYhnp-C9e3tROiI9twKZp6bYKLPtR06V4jZ8KnsrkpDTMAF4duTtTTh0eq4uIPSiYfzw-_68ELOn_71c7g=s400';

  this.img.onload = function(){
    this.draw()
  }.bind(this)
  this.draw = function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    this.y ++
  }
  this.move = function(){
    this.y -= 50;
  }
}

var board = new Board;
var flappy = new Flappy;
var interval;
var frames = 0;

function update(){
  console.log(frames)
  frames++
  ctx.clearRect(0,0,canvas.width,canvas.height)
  board.draw()
  flappy.draw()
}

function start(){
  if(interval > 0) return;
  interval = setInterval(function(){
    update()
  },1000/60)
}

function stop(){
  clearInterval(interval);
  interval = 0;
}

document.getElementById('start-button').addEventListener('click',start)
document.getElementById('pause-button').addEventListener('click',stop)
addEventListener('keydown',function(e){
  if(e.keyCode === 32){
    flappy.move()
  }
})