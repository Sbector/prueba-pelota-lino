var counter = 0;
var timeleft = 432000;
var initDate = new Date(2018, 2, 13, 21, 0, 0, 0);

function convertSeconds(s) {
	var day = floor(s/86400);
	var hou = floor(s/3600)%24;
	var min = floor(s/60)%60;
	var sec = s % 60;
	
	return day + ' días ' + nf(hou,2) + ':' + nf(min,2) + ':' + nf(sec,2);
}

// calculo de distancia de fechas en segundos
function differenceOnSeconds(t1) {
	this.t1 = t1;
	this.t2 = new Date();
	this.td = floor ((t1.getTime() - t2.getTime())/1000);
	return td;
}

function setup() {
	noCanvas();

	timeleft = differenceOnSeconds(initDate);

	var timer = select('#timer');
	timer.html('faltan ' + convertSeconds(timeleft - counter));

	var interval = setInterval(timeIt, 1000);
	
	console.log(differenceOnSeconds(initDate));

	


	// contador
	function timeIt() {
		counter++;
		timer.html('faltan ' + convertSeconds(timeleft - counter));
		if (counter == timeleft) {
			clearInterval(interval);
			counter = 0;
		}
	}
}