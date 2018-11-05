class Obstacle {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.hp = 4;
    this.x = Math.floor(Math.random() * (700 - 100) + 100);
    this.y = 20;
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
      this.y += 5;
    }, 100);
  };

  checkIfHit(shot) {
    if(this.x < shot.x && this.x+this.width > shot.x+shot.width && this.y+this.height >= shot.y-3 && !(this.y < shot.y)){
      this.hp-=1;
      if (this.hp === 0) {
        return false
      } return true
    }
  }
}