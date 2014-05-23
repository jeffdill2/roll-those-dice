/* global describe, it */

(function () {
    'use strict';

 	describe('Number of dice', function() {
 		it('should have between one and five die', function() {
 		expect(dieHolder.length).to.be.within(1, 5)
 		});
 	});

 	describe('Roll Button', function() {
 		it('should excecute roll function', function() {
 			dieHolder.forEach( function(die) {
 				expect(die.roll).to.be.a("number")
 			});
 		});
 	});

})();

