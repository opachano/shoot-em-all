class Plane {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.hp = 5;
    this.fire = 1;
    this.shotsFired = [];
    this.x = 350;
    this.y = 640;
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
        this.y -= 0.75;
      }
      
    }
    if(keysBeingPressed.includes("ArrowDown")){

      if(this.canMove(this.x, this.y+this.height+10)){
      this.y += 0.75;
      }

    }

    if(keysBeingPressed.includes("ArrowLeft")){
      if(this.canMove(this.x-10, this.y)){
      this.x -= 0.75; 
      }
    }

    if(keysBeingPressed.includes("ArrowRight")){
      if(this.canMove(this.x+this.width+10, this.y)){
      this.x += 0.75; 
      }
    }
  }
//Checks for collision
  canMove(futureX, futureY){
    if(futureX < 0 || futureX > 800 || futureY < 0 || futureY > 700 ){
      return false;
    } return true
  }

//Controls the amount of shots displayed
  shot() {
    if(cd) {
      if(keysBeingPressed.includes("z")){
        this.shotsFired.push(new Shot(this.x+40, this.y));
        cd = false;
        setTimeout(() => {cd = true}, 500);
      }
    }
  }

  checkIfCollide(obstacle) {
    if(collisionCd){
    if (this.y > obstacle.y+obstacle.height || this.y+this.height < obstacle.y || this.x > obstacle.x+obstacle.width || this.x+this.width < obstacle.x) {
      return; 
    }
    this.hp-=1;
    collisionCd = false;
    console.log(this.hp)
    setTimeout(() => {collisionCd = true}, 1000);
  }
  }
}