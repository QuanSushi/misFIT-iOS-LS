$(document).ready(function clock() {
	initiate();
	showHour();
	showMinutes();
});

function initiate() {
	hideHours();
	hideMinutes();
};

/* 
 * This method hides all circles
 */
function hideHours() {
	$('#hour0, #hour1, #hour2, #hour3, #hour4, #hour5, #hour6, #hour7, #hour8, #hour9, #hour10, #hour11').fadeTo(1000, 0.1); //hide alle circles
};

function hideMinutes() {
	$('#minute0, #minute1, #minute2, #minute3, #minute4, #minute5, #minute6, #minute7, #minute8, #minute9, #minute10, #minute11').fadeTo(1000, 0.1); //hide alle circles
};

//get time
function getHour() {
	var currentTime = new Date();
	var h = currentTime.getHours() % 12;
	return h;
};

function getMin() {
	var currentTime = new Date();
	var m = Math.round(currentTime.getMinutes() / 5);
	return m;
};

function getSec() {
	var currentTime = new Date();
	var s = currentTime.getSeconds();
	return s;
};
/*
 * This method calls getHour and lights the hour circle up.
 * Repeats every 1 second.
 */
function showHour() {
	if (getSec() == 0) {
		hideHours();
	};

	switch (getHour()) {
		case 0 :
			$('#hour0').fadeTo(500, 1);
			break;
		case 1 :
			$('#hour1').fadeTo(500, 1);	
			break;
		case 2 :
			$('#hour2').fadeTo(500, 1);
			break;
		case 3 :
			$('#hour3').fadeTo(500, 1);
			break;
		case 4 :
			$('#hour4').fadeTo(500, 1);
			break;
		case 5 :
			$('#hour5').fadeTo(500, 1);
			break;
		case 6 :
			$('#hour6').fadeTo(500, 1);
			break;
		case 7 :
			$('#hour7').fadeTo(500, 1);
			break;
		case 8 :
			$('#hour8').fadeTo(500, 1);
			break;
		case 9 :
			$('#hour9').fadeTo(500, 1);
			break;
		case 10 :
			$('#hour10').fadeTo(500, 1);
			break;
		case 11 :
			$('#hour11').fadeTo(500, 1);
			break;
		default : 
			hideHours();
			break;
	};
	var t = setTimeout(function(){showHour()},1000);
};
/*
 *This method calls minutes and blinks the minutes circle
 */
function showMinutes() {
	switch (getMin()) {
		case 0 :
			$('#minute0').fadeTo(1000, 1);
			break;
		case 1 :
			$('#minute1').fadeTo(1000, 1);
			break;
		case 2 :
			$('#minute2').fadeTo(1000, 1);
			break;
		case 3 :
			$('#minute3').fadeTo(1000, 1);
			break;
		case 4 :
			$('#minute4').fadeTo(1000, 1);
			break;
		case 5 :
			$('#minute5').fadeTo(1000, 1);
			break;
		case 6 :
			$('#minute6').fadeTo(1000, 1);
			break;
		case 7 :
			$('#minute7').fadeTo(1000, 1);
			break;
		case 8 :
			$('#minute8').fadeTo(1000, 1);
			break;
		case 9 :
			$('#minute9').fadeTo(1000, 1);
			break;
		case 10 :
			$('#minute10').fadeTo(1000, 1);
			break;
		case 11 :
			$('#minute11').fadeTo(1000, 1);
			break;
		default : 
			hideMinutes();
			break;
	};
	hideMinutes();
	var t2 = setTimeout(function(){showMinutes()},2000);
};