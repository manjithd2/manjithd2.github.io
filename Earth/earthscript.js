var x;
var y=2,
  numrl=0,
  tr=2;
var images = {};

window.onload=function(){
var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
x=500;
loadImage("map");
loadImage("space");
}

function loadImage(name){
  images[name] = new Image();
  images[name].onload=function(){
    resourceLoaded();
  }

  images[name].src= "Earth/images/"+ name + ".png";

}

function resourceLoaded(){
  numrl+=1;
  if(tr===numrl){
    setInterval(draw,1000/30);
  }
}

function draw(){
  canvas.width=canvas.width;
  move();
 ctx.drawImage(images["space"],0,0,canvas.width,canvas.height);
 ctx.fillStyle="white";
 ctx.font="bold 50px Myriad Pro";
 ctx.fillText("Hello World",550,100);
 ctx.font="20px Myriad Pro";
 ctx.fillText("Incase you're an alien, this is where i live :V",500,700);
  
  
}

function move(){
  x-=1.0;
  if(x>0){
      ctx.drawImage(images["map"],x,y,1000,852);

  }
  else{
    x=500;
  }

}


