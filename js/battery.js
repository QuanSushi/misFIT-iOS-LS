var free = "";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

function init() {

refreshLocationTimer = setTimeout(init, 2*1000);

jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function(appdata) {

var myvar = appdata;
var substr = appdata.split('\n');
var free = substr[0].split(':')[1];
var Used = substr[1].split(':')[1];
var Total_usable = substr[2].split(':')[1];
var Total_physical = substr[3].split(':')[1];

document.getElementById("battery").innerHTML = "Battery: " + free;
});

}