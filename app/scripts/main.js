function Dice(sides, countBy) {
	this.sides = sides;
	this.countBy = countBy;

	this.roll = function() {
		return Math.floor(Math.random() * this.sides + 1 ) * this.countBy;
	};
}

var dieHolder = [];