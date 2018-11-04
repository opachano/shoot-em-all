class Obstacle {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.hp = 4;
    this.x = Math.floor(Math.random() * (740 - 60) + 60);
    this.y = 20;
    this.width =  32;
    this.height =  24;
    this.imgsrc = "../images/enemyPlane.png"
    this.moveDown();
  }
//Draw the obstacle
  draw(){ 
    let enemyImg = new Image();
    enemyImg.src = this.imgsrc;
    enemyImg.onload = () => {
    this.ctx.drawImage(enemyImg, this.x, this.y, this.width, this.height);
    }
  }


  moveDown(){
    setInterval(()=>{
      this.y += 5;
    }, 100)
  }
}