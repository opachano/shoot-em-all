class Obstacle {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.hp = 4;
    this.x = Math.floor(Math.random() * (700 - 100) + 100);
    this.y = -10;
    this.width =  60;
    this.height =  34;
    this.alive = 1;
    this.moveDown();
    this.i = 0;
    
  }
//Draw the obstacle
  draw(){ 
    let img = new Image();

    if(this.hp > 0) {
        img.src = "./images/enemyPlane.png";
    } else {
      img.src = "./images/enemyExplosion/basicExplosion"+this.i+".png";
   
      if(theGame.frames % 20 === 0){
        this.i++;
      }
  
    }

    this.ctx.drawImage(img,this.x,this.y, this.width,this.height)
  };


  moveDown(){
    setInterval(()=>{
      if(this.hp > 0) {
       this.y += 10;
      }
      }, 100);
  };

  checkIfHit(shot) {
    if(this.y > shot.y+shot.height || this.y+this.height < shot.y || this.x > shot.x+shot.width || this.x+this.width < shot.x){
     return
    }
    this.hp-=1;
    if (this.hp <= 0) {
      explosion.pause();
      explosion.currentTime = 0;
      explosion.play();
      theScore++
      $("#scoreKeeper").text(`${theScore}`);
      return false
    } else return true
  }
}