////////////////////////////////////////////////////////////
/////////////////////////////////////////// GLOBAL FUNCTIONS
////////////////////////////////////////////////////////////
function Dice(sides, countBy) {
	this.sides = sides;
	this.countBy = countBy;

	this.roll = function() {
		return Math.floor(Math.random() * this.sides + 1 ) * this.countBy;
	};
}

////////////////////////////////////////////////////////////
//////////////////////////////////////////// UI INTERACTIONS
////////////////////////////////////////////////////////////
var aryDieHolder = [];

$('#____ROLL-BUTTON____').click(function() {
	var numDiceCount = $('#____DICE-COUNT____').val();


});

$('#____RESET-BUTTON____').click(function() {
	var numDiceCount = $('#____DICE-COUNT____').val();

	$('#____DICE-COUNT____').val('');

	for (var i = 1; i <= aryDieHolder.length; i += 1) {
		$('#____DICE-SIDES____' + i.toString()).val('');
		$('#____DICE-COUNTBY____' + i.toString()).val('');
	}
});