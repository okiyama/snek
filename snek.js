function Snake() {
	var snekFatness = 10;
	return {
		fatness: snekFatness,
		mySnek: [Point(width/2, height/2, snekFatness, snekFatness)],
		longness: 50,

		moveSpeed: 3,
		moving: "UP",

		currentlyNotAFailure: true,

		update: function() {
			if(this.currentlyNotAFailure && this.lost()) {
				this.stahp();
				this.showFail();
				this.currentlyNotAFailure = false;
			} 
			if(!this.currentlyNotAFailure) {
				return;
			}
			this.updateDs();
			var snekLength = this.mySnek.length
				head = this.mySnek[snekLength - 1];

			head.x += this.dX;
			head.y += this.dY;
			var newPoint = Point(head.x, head.y, this.fatness, this.fatness);
			this.mySnek.push(newPoint);
			this.trimSnek();
		},

		lost: function() {
			var snekLength = this.mySnek.length,
				head = this.mySnek[snekLength - 1],
				headFattedness = 7; //This can be based on the width and speed

			outsideArena = head.x > width || head.x < 0 || head.y > height || head.y < 0;
			collidesWithTail = this.mySnek.length > headFattedness && 
				this.mySnek.slice(0, snekLength - headFattedness).some(function(tail) {
					return head.collides(tail);
				});
			return outsideArena || collidesWithTail;
		},

		showFail: function() {
			textSize(32);
			fill(0);
			text("you suck", width/2, height/2);
		},

		draw: function() {
			if(this.lost()) {
				return;
			}
			this.drawSnek();
		},

		drawSnek: function() {
  			background(33, 99, 204);
			this.mySnek.forEach(function(point) {
				point.draw();
			});
		},

		trimSnek: function() {
			//Note, we could also check the age of the point and remove any that are too old.
			//As is, this is fine though. Not sure if it'll break when we add more longness.
			if(this.shouldTrim()) {
				this.mySnek.splice(0, 1);
			}
		},

		isFullLength: function() {
			return this.mySnek.length === this.longness;
		},

		shouldTrim: function() {
			return this.mySnek.length > this.longness;
		},

		updateDs: function() {
			switch(this.moving) {
				case "RIGHT":
					this.dX = this.moveSpeed;
					this.dY = 0;
					break;
				case "LEFT":
					this.dX = -this.moveSpeed;
					this.dY = 0;
					break;
				case "UP":
					this.dX = 0;
					this.dY = -this.moveSpeed;
					break;
				case "DOWN":
					this.dX = 0;
					this.dY = this.moveSpeed;
					break;
			}
		},

		moveRight: function() {
			if(this.moving === "LEFT") {
				return;
			}
			this.moving = "RIGHT";
		},

		moveLeft: function() {
			if(this.moving === "RIGHT") {
				return;
			}
			this.moving = "LEFT";
		},

		moveUp: function() {
			if(this.moving === "DOWN") {
				return;
			}
			this.moving = "UP";
		},

		moveDown: function() {
			if(this.moving === "UP") {
				return;
			}
			this.moving = "DOWN";
		},

		stahp: function() {
			this.dX = 0;
			this.dY = 0;
		}
	};
}