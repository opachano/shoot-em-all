class Plane {
  constructor() {
    this.hp = 5;
    this.fire = 1;
    this.x = 390;
    this.y = 680;
    this.ctx = document.getElementById('game-screen').getContext('2d');
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x+20, this.y);
    this.ctx.lineTo(this.x, this.y+20);
    this.ctx.lineTo(this.x-20, this.y);
    this.ctx.fill();
  }

  move(){

    if(keysBeingPressed.includes("ArrowUp")){
      if(this.canMove(this.x, this.y-10)){
        this.y -= 10;
      }
      
    }
    if(keysBeingPressed.includes("ArrowDown")){

      if(this.canMove(this.x, this.y+10)){
      this.y += 10;
      }

    }

    if(keysBeingPressed.includes("ArrowLeft")){
      if(this.canMove(this.x-10, this.y)){
      this.x -= 10; 
      }
    }

    if(keysBeingPressed.includes("ArrowRight")){
      if(this.canMove(this.x+10, this.y)){
      this.x += 10; 
      }
    }
  }

    canMove(futureX, futureY){
      let result = true;
      if(futureX < 0 || futureX > 800 || futureY < 0 || futureY > 700 ){
        result = false;
      } return result
  
  }
}