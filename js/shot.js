class Shot {
  constructor(x, y) {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 3;
    this.height = 10;
    this.imgsrc = "/images/shots.png"
    this.moveUp();
  }
//Draws the shots
  draw(){ 
    let shotImg = new Image();
    shotImg.onload = () => {
      this.ctx.drawImage(shotImg, this.x, this.y, this.width, this.height);
    };
    shotImg.src = this.imgsrc;
  }

  moveUp() {
    setInterval(()=>{
      this.y -= 1.5;
    }, 5)
  }
}
