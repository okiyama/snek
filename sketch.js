var gameController;

function setup() {
  frameRate(5);
  createCanvas(1000, 600);
  colorMode(HSB, 360, 100, 100, 1);
  gameController = new GameController();
}

function draw() {
  gameController.update();
  gameController.draw();
}

function keyPressed() {
  gameController.onKeyPressed(keyCode);
}

// function keyReleased() {
//   var theresAKeyPressed = [LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW].some(keyIsDown);
//   if(!theresAKeyPressed) {
//     snek.stahp(); 
//   }
// }

/*
 * TODOs:
 *  Draw one more circle before losing
 *  Up then left/right shouldn't lose
 *  Raise framerate but maintain distance between body
 *  Fruit shouldn't spawn too close to edges.
 *  A second type of fruit that adds speed (self worth multiplier) rather than length
 */