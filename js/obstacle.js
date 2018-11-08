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
    this.stopper = true;
    this.soundStopper = true
  }
//Draw the obstacle
  draw(){ 
    let img = new Image();

    if(this.hp > 0) {
        img.src = "./images/enemyPlane.png";
    } else {
      img.src = "./images/enemyExplosion/basicExplosion"+this.i+".png";
   
      if(theGame.frames % 10 === 0){
        this.i++;
      }
      if(this.i === 4 && this.stopper === true) {
        this.stopper = false; 
        setTimeout(()=>{
          theGame.obstacles.splice((theGame.obstacles.indexOf(this)), 1)
      }, 50)
    }}

    this.ctx.drawImage(img,this.x,this.y, this.width,this.height)
  };


  moveDown(){
    setInterval(()=>{
      if(this.hp > 0) {
       this.y += 10;
      }
      }, 80);
  };

  checkIfHit(shot) {
    if(this.y > shot.y+shot.height || this.y+this.height < shot.y || this.x > shot.x+shot.width || this.x+this.width < shot.x){
     return
    }
    this.hp-=1;
    if (this.hp <= 0 && this.soundStopper === true) {
      this.soundStopper = false;
      explosion.play();
      theScore++
      $("#scoreKeeper").text(`${theScore}`);
      return false
    } else return true
  }
}