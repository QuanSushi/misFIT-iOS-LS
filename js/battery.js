var percentage = "default";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

$(document).ready(function() {
	$('#battery').html(percentage);
	test();
});

function test() {
	$.get('../misFIT/files/BatteryStats.txt', function(appdata) {
		var myvar = appdata;
		var substr = appdata.split('\n');
		var percentage=substr[0].split(':')[1];
	}, 'text');
	alert(percentage);
}