class Background {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    // this.src = "../images/background.png"
    this.x = 0, 
    this.y = -799, 
    this.width = bg.width, 
    this.height = bg.height;
  }

  render(){
    this.ctx.drawImage(bg, 0, this.y+=50);
    if(this.y >= 0){
        this.y = -799;
    }
  }
} 