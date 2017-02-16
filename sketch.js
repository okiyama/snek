var snek,
  fruitManager;
function setup() {
  createCanvas(1000, 600);
  colorMode(HSB, 360, 100, 100, 1);
  snek = Snake();
  fruitManager = FruitManager();
}

function draw() {
  snek.update();
  var lengthToAdd = fruitManager.update(snek.getHead());
  snek.addLength(lengthToAdd);
  snek.draw();
  fruitManager.draw();
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