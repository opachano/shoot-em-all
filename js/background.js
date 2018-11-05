class Background {
  constructor() {
    this.ctx = document.getElementById("game-background").getContext("2d");
    this.src = "../images/background.png"
    this.x = 0, 
    this.y = -799
  }

  render(){
    let bgImage = new Image();
    bgImage.onload = () => {
    this.ctx.drawImage(bgImage, 0, this.y+=10, 900, 1600);
    if(this.y >= 0){
        this.y = -799;
    }}
    bgImage.src = this.src;
  }
} 