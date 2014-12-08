$(document).ready(function clock() {
	/* 
	 * This method hides all circles
	 */
	$('div').fadeTo(1000, 0.1); //hide alle circles
	$('#timer').fadeTo(0, 1); //unhide clock
	$('div').click(function() {
		$(this).fadeTo(500, 1);
	});
	$('div').click(function() {
		$(this).fadeTo(1000, 0.1);
	});

	showHour();
	showMinutes();
	var t = setTimeout(function(){clock()},60000);
});
//get time
function getTime() {
var currentTime = new Date();
	h = currentTime.getHours() % 12;
	m = Math.round(currentTime.getMinutes() / 5);
}
/*
 *This method calls hour and lights the hour circle up
 */
function showHour() {
		getTime();
			switch (h) {
				case 0 :
					$(document).ready(function() {
						$('#hour0').fadeTo(500, 1);
					});
					break;
				case 1 :
					$(document).ready(function() {
						$('#hour1').fadeTo(500, 1);
					});				
					break;
				case 2 :
					$(document).ready(function() {
						$('#hour2').fadeTo(500, 1);
					});
					break;
				case 3 :
					$(document).ready(function() {
						$('#hour3').fadeTo(500, 1);
					});
					break;
				case 4 :
					$(document).ready(function() {
						$('#hour4').fadeTo(500, 1);
					});
					break;
				case 5 :
					$(document).ready(function() {
						$('#hour5').fadeTo(500, 1);
					});
					break;
				case 6 :
					$(document).ready(function() {
						$('#hour6').fadeTo(500, 1);
					});
					break;
				case 7 :
					$(document).ready(function() {
						$('#hour7').fadeTo(500, 1);
					});
					break;
				case 8 :
					$(document).ready(function() {
						$('#hour8').fadeTo(500, 1);
					});
					break;
				case 9 :
					$(document).ready(function() {
						$('#hour9').fadeTo(500, 1);
					});
					break;
				case 10 :
					$(document).ready(function() {
						$('#hour10').fadeTo(500, 1);
					});
					break;
				case 11 :
					$(document).ready(function() {
						$('#hour11').fadeTo(500, 1);
					});
					break;
				default : break;
			}
}
/*
 *This method calls minutes and blinks the minutes circle
 */
function showMinutes() {
			switch (m) {
				case 0 :
					$(document).ready(function() {
						$('#hour0').fadeTo(1000, 1);
						$('#hour0').fadeTo(1000, 0.1);	
						$('#hour0').fadeTo(1000, 1);
						$('#hour0').fadeTo(1000, 0.1);
						$('#hour0').fadeTo(1500, 1);
					});	
					break;
				case 1 :
					$(document).ready(function() {
						$('#hour1').fadeTo(1000, 1);
						$('#hour1').fadeTo(1000, 0.1);	
						$('#hour1').fadeTo(1000, 1);
						$('#hour1').fadeTo(1000, 0.1);
						$('#hour1').fadeTo(1500, 1);
					});				
					break;
				case 2 :
					$(document).ready(function() {
						$('#hour2').fadeTo(1000, 1);
						$('#hour2').fadeTo(1000, 0.1);	
						$('#hour2').fadeTo(1000, 1);
						$('#hour2').fadeTo(1000, 0.1);
						$('#hour2').fadeTo(1500, 1);
					});	
					break;
				case 3 :
					$(document).ready(function() {
						$('#hour3').fadeTo(1000, 1);
						$('#hour3').fadeTo(1000, 0.1);	
						$('#hour3').fadeTo(1000, 1);
						$('#hour3').fadeTo(1000, 0.1);
						$('#hour3').fadeTo(1500, 1);
					});	
					break;
				case 4 :
					$(document).ready(function() {
						$('#hour4').fadeTo(1000, 1);
						$('#hour4').fadeTo(1000, 0.1);	
						$('#hour4').fadeTo(1000, 1);
						$('#hour4').fadeTo(1000, 0.1);
						$('#hour4').fadeTo(1500, 1);
					});	
					break;
				case 5 :
					$(document).ready(function() {
						$('#hour5').fadeTo(1000, 1);
						$('#hour5').fadeTo(1000, 0.1);	
						$('#hour5').fadeTo(1000, 1);
						$('#hour5').fadeTo(1000, 0.1);
						$('#hour5').fadeTo(1500, 1);
					});	
					break;
				case 6 :
					$(document).ready(function() {
						$('#hour6').fadeTo(1000, 1);
						$('#hour6').fadeTo(1000, 0.1);	
						$('#hour6').fadeTo(1000, 1);
						$('#hour6').fadeTo(1000, 0.1);
						$('#hour6').fadeTo(1500, 1);
					});	
					break;
				case 7 :
					$(document).ready(function() {
						$('#hour7').fadeTo(1000, 1);
						$('#hour7').fadeTo(1000, 0.1);	
						$('#hour7').fadeTo(1000, 1);
						$('#hour7').fadeTo(1000, 0.1);
						$('#hour7').fadeTo(1500, 1);
					});	
					break;
				case 8 :
					$(document).ready(function() {
						$('#hour8').fadeTo(1000, 1);
						$('#hour8').fadeTo(1000, 0.1);	
						$('#hour8').fadeTo(1000, 1);
						$('#hour8').fadeTo(1000, 0.1);
						$('#hour8').fadeTo(1500, 1);
					});	
					break;
				case 9 :
					$(document).ready(function() {
						$('#hour9').fadeTo(1000, 1);
						$('#hour9').fadeTo(1000, 0.1);	
						$('#hour9').fadeTo(1000, 1);
						$('#hour9').fadeTo(1000, 0.1);
						$('#hour9').fadeTo(1500, 1);
					});	
					break;
				case 10 :
					$(document).ready(function() {
						$('#hour10').fadeTo(1000, 1);
						$('#hour10').fadeTo(1000, 0.1);	
						$('#hour10').fadeTo(1000, 1);
						$('#hour10').fadeTo(1000, 0.1);
						$('#hour10').fadeTo(1500, 1);
					});	
					break;
				case 11 :
					$(document).ready(function() {
						$('#hour11').fadeTo(1000, 1);
						$('#hour11').fadeTo(1000, 0.1);	
						$('#hour11').fadeTo(1000, 1);
						$('#hour11').fadeTo(1000, 0.1);
						$('#hour11').fadeTo(1500, 1);
					});	
					break;
				default : break;
			}
}

