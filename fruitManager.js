function FruitManager() {
	return {
		lengthPerFruit: 100,
		fruitSize: 75,
		myDeliciousFruits: [],

		update: function(head) {
			var numCollisions = this.checkForCollision(head);
			if(this.myDeliciousFruits.length === 0) {
				this.addFruit();
			}

			return numCollisions * this.lengthPerFruit;
		},

		draw: function() {
			this.myDeliciousFruits.forEach(function(point) {
				point.draw();
			});
		},

		checkForCollision: function(head) {
			var	currFruit,
				numCollisions = 0;
			for(var i = this.myDeliciousFruits.length - 1; i >= 0; i--) {
				currFruit = this.myDeliciousFruits[i];
				if(head.collides(currFruit)) {
					this.myDeliciousFruits.splice(i, 1);
					numCollisions++;
				}
			}

			return numCollisions;
		},

		addFruit: function() {
			var randX = getRandomInt(0, width),
				randY = getRandomInt(0, height),
				fruitColor = color(0, 100, 50, 1);
			this.myDeliciousFruits.push(Point(randX, randY, this.fruitSize, this.fruitSize, fruitColor));
		}
	};
};