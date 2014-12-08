
window.onload = function timer() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('timer').innerHTML = h+":"+m+":"+s;
	var t = setTimeout(function(){timer()},500);
};

function checkTime(i) {
	if (i < 10) { i = "0" + i };
	return i;
};
