class Background {
  constructor() {
    this.ctx = document.getElementById("game-background").getContext("2d");
    this.src = "./images/tokyo.png"
    this.x = 0, 
    this.y = -899
  }

  render(){
    let bgImage = new Image();
    bgImage.src = this.src;
    this.ctx.drawImage(bgImage, 0, this.y+=0.25, 800, 1600);
    if(this.y >= 0){
        this.y = 0;
    }
  }
} 