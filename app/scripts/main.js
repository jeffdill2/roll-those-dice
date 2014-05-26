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

// Setting the page to default values
for (var i = 1; i <= 5; i += 1) {
	$('#dice-sides-' + i.toString()).css('display', 'none');
	$('#dice-countby-' + i.toString()).css('display', 'none');
}

$('#dice-selector').val('');

// Click and change functions on buttons
$('#roll-button').click(function() {
	var numDiceCount = $('#dice-selector').val();

	if (!numDiceCount) {
		alert('You must select how many dice you want to roll before rolling.');
	}

	for (var i = 1; i <= numDiceCount; i += 1) {
		if ($('#dice-sides-' + i.toString()).val() > 20 || $('#dice-sides-' + i.toString()).val() < 6) {
			alert('Number of sides for any given die must be between 6 and 20.');
			return;
		} else if ($('#dice-countby-' + i.toString()).val() > 100 || $('#dice-countby-' + i.toString()).val() < 1) {
			alert('Number to count by for any given die must be between 1 and 100.');
			return;
		}
	}

	for (var i = 1; i <= numDiceCount; i += 1) {
		aryDieHolder.push(new Dice($('#dice-sides-' + i.toString()).val(), $('#dice-countby-' + i.toString()).val()));
	}

	aryDieHolder.forEach(function(objDie, numDieIndex) {
		$('#dice-roll-' + (numDieIndex + 1).toString()).text(objDie.roll().toString());
	});

	aryDieHolder = [];
});

$('#reset-button').click(function() {
	var numDiceCount = $('#dice-selector').val();

	$('#dice-selector').val('');

	for (var i = 1; i <= 5; i += 1) {
		$('#dice-sides-' + i.toString()).css('display', 'none');
		$('#dice-countby-' + i.toString()).css('display', 'none');
		$('#dice-roll-' + i.toString()).css('display', 'none');
	}

	for (var i = 1; i <= numDiceCount; i += 1) {
		$('#dice-sides-' + i.toString()).val('');
		$('#dice-countby-' + i.toString()).val('');
		$('#dice-roll-' + i.toString()).val('');
	}
});

$('#dice-selector').change(function() {
	var numDiceCount = $('#dice-selector').val();

	for (var i = 1; i <= 5; i += 1) {
		$('#dice-sides-' + i.toString()).css('display', 'none');
		$('#dice-countby-' + i.toString()).css('display', 'none');
	}

	for (var i = 1; i <= numDiceCount; i += 1) {
		$('#dice-sides-' + i.toString()).css('display', 'block');
		$('#dice-countby-' + i.toString()).css('display', 'block');
	}
});