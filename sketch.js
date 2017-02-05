var snek;
function setup() {
  createCanvas(1000, 600);
  snek = Snake();
}

function draw() {
	snek.update();
  snek.draw();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snek.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    snek.moveRight();
  } else if (keyCode === UP_ARROW) {
    snek.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    snek.moveDown();
  } else if(keyCode === 173 || keyCode === 189)  { //-
    snek.moveSpeed -= 1;
  } else if(keyCode === 61 || keyCode === 187)  { //=
    snek.moveSpeed += 1;
  }
}

// function keyReleased() {
//   var theresAKeyPressed = [LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW].some(keyIsDown);
//   if(!theresAKeyPressed) {
//     snek.stahp(); 
//   }
// }