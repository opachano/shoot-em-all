let thePlane;
let theGame;
let keysBeingPressed = [];
let cd = true;
let collisionCd = true;
let defeat = false;
let theScore = 0;
let laser = document.getElementById("laser");
let explosion = document.getElementById("explosion");
let tokyo = document.getElementById("tokyo");
let damage = document.getElementById("damage");
let death = document.getElementById("death");

// The game
class Game {
  constructor(plane) {
    this.ctx = document.getElementById("game-screen").getContext("2d");
    this.plane = plane;
    this.obstacles = [];
    this.plane.draw();
    this.background = new Background();
    this.frames = 0;
    this.physicsEngine();

// Creates the enemies
    setInterval(() => {
      this.obstacles.push(new Obstacle);
    }, 3000);
  }

  // Gets the game running    
    physicsEngine(){
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

      this.obstacles.forEach(obstacle => {
        this.plane.checkIfCollide(obstacle);
      });
      this.plane.shotsFired.forEach((shot,shotIndex) => {
        this.obstacles.forEach((obstacle, obstacleIndex) => {
          if(obstacle.checkIfHit(shot) === true) {
            this.plane.shotsFired.splice(shotIndex, 1);
          }
          if(obstacle.checkIfHit(shot) === false) {
            setTimeout(()=>{this.obstacles.splice(obstacleIndex, 1)}, 1000);
            this.plane.shotsFired.splice(shotIndex, 1);
          }
        })
      })

      this.frames++
    window.requestAnimationFrame(this.physicsEngine.bind(this));
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
window.onload = function() {
  $("#startGame").on("click", () => {
    tokyo.play();
    $("#firstImage").toggle();
    $("#secondImage").toggle();
    $("#startGame").toggle();
    $("#game-instructions").text(`Thank you for volunteering great pilot, it's time to 
    fight the bad guys ahead! Move around with the arrow keys and shoot at
    your enemies using "Z". Let me know when you are ready.`)
    $("#ready").toggle();
  })

  $("#ready").on("click", () => {
    $("#game-menu").toggle();
    thePlane = new Plane();
    theGame = new Game(thePlane);
  })
  }

document.onkeydown = function(e) {
  if(!defeat) {
    let commands = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "z"]
      if(commands.includes(e.key)){
        e.preventDefault();
      }
      if(!keysBeingPressed.includes(e.key)){
        keysBeingPressed.push(e.key);
      }
  

  document.onkeyup = function(e){
    let theIndex = keysBeingPressed.indexOf(e.key)
      if(theIndex != -1){
      keysBeingPressed.splice(theIndex,1)
      }
    }
  }
}
