var Pbrowser, Pstandar, Poffset, Psynchronized;


function standardTime () {
	this.UTC = Date.now();
	return this.UTC;
}

function setup() {
	createCanvas(400,400);
	Pbrowser = select('#browser');
	Pstandard = select('#standard');
	Poffset = select('#offset');
	Psynchronized = select('#synchronized');
}

function draw() {
	var browser = new Date().getTime();
	var standard = standardTime();
	var offset = ServerDate - new Date();
	var synchronized = standard  + (offset*-1);

	background(255);

	Pbrowser.html('brow ' + browser);
	Pstandard.html('stan ' + standard);
	Poffset.html('offs ' + offset);
	Psynchronized.html('sync ' + synchronized);
}