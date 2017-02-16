function Point(givenX, givenY, width, height, initialColor) {
	return {
		x: givenX,
		y: givenY,
		w: width,
		h: height,
		initC: initialColor,
		c: initialColor || color(360, 100, 50, 1),
		age: 0,

		draw: function() {
			this.updateColor();
			fill(this.c);
			ellipse(this.x, this.y, this.w, this.h);
			this.age++;
		},

		updateColor: function() {
			var h = hue(this.c);

			h += (h + (this.age * 1));
			this.c = color(h, 100, 100, 1);
		},

		//http://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other
		collides: function(otherPoint) {
			var wiggleroom = 2,
			 	myX1 = this.x - (this.w / wiggleroom),
				myY1 = this.y - (this.h / wiggleroom),
				myX2 = this.x + (this.w / wiggleroom),
				myY2 = this.y + (this.h / wiggleroom),
				otherX1 = otherPoint.x - (otherPoint.w / wiggleroom),
				otherY1 = otherPoint.y - (otherPoint.h / wiggleroom),
				otherX2 = otherPoint.x + (otherPoint.w / wiggleroom),
				otherY2 = otherPoint.y + (otherPoint.h / wiggleroom);

			return myX1 < otherX2 && myX2 > otherX1 && myY1 < otherY2 && myY2 > otherY1;
		}

	};
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}