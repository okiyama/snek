//Controls the state of the game. Passes information between the various systems as they need it
function GameController() {
	return {
		snek: new Snake(),
		fruitManager: new FruitManager(),

		update: function() {
			this.snek.update();
			var lengthToAdd = this.fruitManager.update(this.snek.getHead());
			this.snek.addLength(lengthToAdd);
		},

		draw: function() {
			this.snek.draw();
			this.fruitManager.draw();
			this.drawScore(this.getScore());
		},

		onKeyPressed: function(keyCode) {
			if (keyCode === LEFT_ARROW) {
				this.snek.moveLeft();
			} else if (keyCode === RIGHT_ARROW) {
				this.snek.moveRight();
			} else if (keyCode === UP_ARROW) {
				this.snek.moveUp();
			} else if (keyCode === DOWN_ARROW) {
				this.snek.moveDown();
			} else if (keyCode === 173 || keyCode === 189) { //-
				this.snek.moveSpeed -= 1;
			} else if (keyCode === 61 || keyCode === 187) { //=
				this.snek.moveSpeed += 1;
			}
		},

		getScore: function() {
			return this.snek.mySnek.length * this.snek.moveSpeed;
		},

		//TODO: Only draw if not lost
		drawScore: function(currScore) {
			textSize(24);
			fill(0, 0, 0, 1);
			text("Self worth: " + currScore, 10, 30);
		}
	};
};