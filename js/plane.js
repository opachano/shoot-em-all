class Plane {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.hp = 5;
    this.fire = 1;
    this.shotsFired = [];
    this.x = 390;
    this.y = 680;
    this.width = 80;
    this.height = 48;
    this.imgsrc = "../images/plane.png";
  }
// Draws the plane
  draw() {
    let planeImg = new Image();
      planeImg.src = this.imgsrc;
      planeImg.onload = () => {
      this.ctx.drawImage(planeImg, this.x, this.y, this.width, this.height);
    }
  }
//Moves the plane
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
//Checks for collision
  canMove(futureX, futureY){
    let result = true;
    if(futureX < 0 || futureX > 800 || futureY < 0 || futureY > 700 ){
      result = false;
    } return result
  }

//Controls the amount of shots displayed
  shot() {
    if(keysBeingPressed.includes("z")){
    this.shotsFired.push(new Shot(this.x+40, this.y));
    }
  }
}