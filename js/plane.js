class Plane {
  constructor() {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.hp = 5;
    this.fire = 1;
    this.shotsFired = [];
    this.x = 350;
    this.y = 640;
    this.width = 100;
    this.height = 56;
    this.alive = 1;
    this.i = 0
  }

// Draws the plane
  draw() {
    let img = new Image()
    if (this.hp === 5) {
      img.src = "./images/playerPlane/plane0.png"
      }

    if (this.hp === 4) {
      img.src = "./images/playerPlane/plane1.png"
      }
        
    if (this.hp === 3) {
      img.src = "./images/playerPlane/plane2.png"
      }

    if (this.hp === 2) {
      img.src = "./images/playerPlane/plane3.png"
      } 
            
    if (this.hp === 1) {
      img.src = "./images/playerPlane/plane4.png"
      }

    if (this.hp <= 0) {  
     img.src = "./images/explosion/explosions"+this.i+".png";
        if(theGame.frames % 20 === 0){
          if(this.i < 14){this.i++};
          }
        } 
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }
//Moves the plane
  move(){
    if(keysBeingPressed.includes("ArrowUp")){
      if(this.canMove(this.x, this.y-10)){
        this.y -= 3;
      }
      
    }
    if(keysBeingPressed.includes("ArrowDown")){

      if(this.canMove(this.x, this.y+this.height+10)){
      this.y += 3;
      }

    }

    if(keysBeingPressed.includes("ArrowLeft")){
      if(this.canMove(this.x-10, this.y)){
      this.x -= 3; 
      }
    }

    if(keysBeingPressed.includes("ArrowRight")){
      if(this.canMove(this.x+this.width+10, this.y)){
      this.x += 3; 
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
        this.shotsFired.push(new Shot(this.x+47, this.y));
        laser.pause();
        laser.currentTime = 0;
        laser.play();
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
      this.hp -= 1;
      if(this.hp > 0) {
      collisionCd = false;
      damage.pause();
      damage.currentTime = 0;
      damage.play();
      }
      if(this.hp === 0) {
        death.pause();
        death.currentTime = 0;
        death.play();
        defeat = true;
      }
      setTimeout(() => {collisionCd = true}, 1000);
    }
  }
}
 