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
      if(this.canMove(this.x, this.y-this.height)){
        this.y -= 10;
      }
      
    }
    if(keysBeingPressed.includes("ArrowDown")){

      if(this.canMove(this.x, this.y+this.height+10)){
      this.y += 10;
      }

    }

    if(keysBeingPressed.includes("ArrowLeft")){
      if(this.canMove(this.x-this.width, this.y)){
      this.x -= 10; 
      }
    }

    if(keysBeingPressed.includes("ArrowRight")){
      if(this.canMove(this.x+this.width+10, this.y)){
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
      if(this.x+2 < obstacle.x && this.x+this.width < obstacle.x+obstacle.width-20 && this.y <= obstacle.y+this.height && !(this.y+this.height < obstacle.y)){
        this.hp-=1;
        console.log(this.hp)
        collisionCd = false;
        setTimeout(() => {collisionCd = true}, 1000);
        if(this.hp === 0) {
          return false
        } 
        return true
      }
    }
  }
}