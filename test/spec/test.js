	'use strict';

	describe('Dice Constructor', function() {
		var dice = new Dice(6,5);
		dieHolder.push(dice);

		describe('Sides of Dice', function() {
			it('should have number of sides specified as first parameter', function() {
				expect(dice.sides).to.be.equal(6);
			});

			it('should have between 6 and 20 sides', function() {
				expect(dice.sides).to.be.within(6,20);
			});
		});

		describe('Interval to Count By', function() {
			it('should have countBy number specified as second parameter', function() {
				expect(dice.countBy).to.be.equal(5);
			});

			it('should have a countBy value no greater than 100', function() {
				expect(dice.countBy).to.be.at.most(100);
			});
		});

	 	describe('Number of dice', function() {
	 		it('should have between one and five die', function() {
	 			expect(dieHolder.length).to.be.within(1, 5)
	 		});
	 	});

	 	describe('Roll Button', function() {
	 		it('should excecute roll function', function() {
	 			dieHolder.forEach(function(die) {
	 				expect(die.roll()).to.be.a("number")
	 			});
	 		});
	 	});

		describe('Verify Dice Rolls', function() {
			it('should return a value within the range of sides times countBy', function() {
				for (var i = 1; i <= 1000; i += 1){
					expect(dice.roll()).to.be.within(5,50);
				}
			});
		});
	});

