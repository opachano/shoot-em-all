let thePlane;
let theGame;
let keysBeingPressed = [];
let bg = new Image();
bg.src = "../images/background.png"
let cd = true;
let collisionCd = true;
// The game
class Game {
  constructor(plane) {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.plane = plane;
    this.obstacles = [];
    this.plane.draw();
    this.background = new Background();
  
// Gets the game running    

    setInterval(() => {

      this.ctx.clearRect(0,0,800,700);
      this.background.render();
      this.plane.shotsFired.forEach((shot,shotIndex) => {
        if(shot.y <= 0) {
          this.plane.shotsFired.splice(shotIndex, 1);
        }
      }); 
      this.obstacles.forEach((obstacle,obstacleIndex) => {
        if(obstacle.y >= 800) {
          this.obstacles.splice(obstacleIndex, 1);
        }
      }); 
      this.plane.move();
      this.plane.shot();
      this.drawEverything();
    }, 5);

    setInterval(() => {
      this.obstacles.forEach((obstacle) => {
        this.plane.checkIfCollide(obstacle);
      });
      this.plane.shotsFired.forEach((shot,shotIndex) => {
        this.obstacles.forEach((obstacle, obstacleIndex) => {
          if(obstacle.checkIfHit(shot) === true) {
            this.plane.shotsFired.splice(shot[shotIndex], 1);
          }
          if(obstacle.checkIfHit(shot) === false) {
            this.obstacles.splice(obstacleIndex, 1);
            this.plane.shotsFired.splice(shotIndex, 1);
          }
        })
      })
    }, 15);

// Creates the enemies
    setInterval(() => {
      this.obstacles.push(new Obstacle);
    }, 3000);

  }
  
// Shows the objects
  drawEverything(){
    this.plane.draw();
    this.plane.shotsFired.forEach(shot => {
      shot.draw();
    });
    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    });
  }
}
// Game initialization
onload = function() {
  thePlane = new Plane();
  theGame = new Game(thePlane);
}

document.onkeydown = function(e) {
  let commands = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "z"]
    if(commands.includes(e.key)){
      e.preventDefault();
    }
    if(!keysBeingPressed.includes(e.key)){
      keysBeingPressed.push(e.key);
    }

     
  }

document.onkeyup = function(e){
  let theIndex = keysBeingPressed.indexOf(e.key)
  if(theIndex != -1){
    keysBeingPressed.splice(theIndex,1)
  }
}
