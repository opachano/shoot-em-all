class Obstacle {
  constructor() {
    this.ctx = document.getElementById('game-screen').getContext('2d');
    this.hp = 4;
    this.x = 380;
    this.y = 20;
    this.width =  20;
    this.height =  20;
    this.moveDown();
  }

  draw(){ 
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }


  moveDown(){
    setInterval(()=>{
      this.y += 5;
    },100)
  }
}