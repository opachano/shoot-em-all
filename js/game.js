let thePlane;
let theGame;
let keysBeingPressed = [];
// The game
class Game {
  constructor(plane) {
    this.ctx = document.getElementById("game-screen").getContext("2d")
    this.plane = plane;
    this.obstacles = [];
    this.plane.draw();
// Gets the game running    
    setInterval(() => {
      this.ctx.clearRect(0,0,800,700);

      this.plane.move();
      this.drawEverything();
    }, 100)

    setInterval(() => {
      this.plane.shot();
    }, 330);
    
// Creates the enemies
    setInterval(() => {
      this.obstacles.push(new Obstacle);
    }, 5000)

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
