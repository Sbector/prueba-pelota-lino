var initDate = new Date(2018, 2, 13, 21, 0, 0, 0);
function setup() {
	createCanvas(windowWidth, windowHeight);
	//t1 = new Date(2018, 0, 20, 20, 0, 0, 0);
}

function draw() {
	background(255);
	//t2 = new Date();
	//td = floor((t2.getTime() - t1.getTime())/1000);
	//console.log("t1 = " + t1);
	//console.log("t2 = " + t2);
	//console.log("td = " + td);
	dateDifferenceOnSeconds(initDate);
	text(this.t1.toString(),30,30);
	text(this.t2.toString(),30,60);
	text(this.td.toString(),30,90);
}

function dateDifferenceOnSeconds(t1) {
	this.t1 = t1;
	this.t2 = new Date();
	this.td = floor((t2.getTime() - t1.getTime())/1000);
}