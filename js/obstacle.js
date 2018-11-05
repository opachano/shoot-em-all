class Obstacle {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.hp = 4;
    this.x = Math.floor(Math.random() * (700 - 100) + 100);
    this.y = -10;
    this.width =  60;
    this.height =  34;
    this.imgsrc = "../images/enemyPlane.png"
    this.moveDown();
  }
//Draw the obstacle
  draw(){ 
    let enemyImg = new Image();
    enemyImg.onload = () => {
      this.ctx.drawImage(enemyImg, this.x, this.y, this.width, this.height);
    };
    enemyImg.src = this.imgsrc;
  };


  moveDown(){
    setInterval(()=>{
      this.y += 0.5;
    }, 10);
  };

  checkIfHit(shot) {
    if(this.y > shot.y+shot.height || this.y+this.height < shot.y || this.x > shot.x+shot.width || this.x+this.width < shot.x){
     return
    }
    this.hp-=1;
    if (this.hp === 0) {
      return false
    } return true
  }
}