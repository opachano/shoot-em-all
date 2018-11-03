class Shot {
  constructor(x, y) {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 3;
    this.height = 10;
    this.moveUp();
  }
//Draws the shots
  draw(){ 
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    setInterval(()=>{
      this.y -= 20;
    },100)
  }

}
