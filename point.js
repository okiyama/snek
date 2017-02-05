function Point(givenX, givenY, width, height) {
	return {
		x: givenX,
		y: givenY,
		w: width,
		h: height,
		c: color(255, 255, 255),
		age: 0,

		draw: function() {
			this.updateColor();
			fill(this.c);
			ellipse(this.x, this.y, this.w, this.h);
			this.age++;
		},

		updateColor: function() {
			var r = red(this.c),
				g = green(this.c),
				b = blue(this.c);

			r += (r * ((this.age + 1) * 0.1));
			g += (g * ((this.age + 1) * 0.2));
			b += (b * ((this.age + 1) * 0.3));
			// r = getRandomInt(0, 255);
			// g = getRandomInt(0, 255);
			// b = getRandomInt(0, 255);
			this.c = color(r % 255, g % 255, b % 255);
		},

		//http://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other
		collides: function(otherPoint) {
			var wiggleroom = 3,
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