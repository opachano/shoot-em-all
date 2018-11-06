class Shot {
  constructor(x, y) {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 6;
    this.height = 18;
    this.imgsrc = "./images/shots.png"
    this.moveUp();
  }
//Draws the shots
  draw(){ 
    let shotImg = new Image();
    shotImg.src = this.imgsrc;
      this.ctx.drawImage(shotImg, this.x, this.y, this.width, this.height);
  }

  moveUp() {
    setInterval(()=>{
      this.y -= 30;
    }, 50)
  }
}
