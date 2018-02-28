var Pbrowser, Pstandar, Poffset, Psynchronized, Pcounter;
var counter = 0;
var color;


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
	Pcounter = select('#counter');
}

function draw() {
	var browser = new Date().getTime();
	var standard = standardTime();
	var offset = ServerDate - new Date();
	var synchronized = standard  + (offset);

	var float = synchronized%1000/100;

	background(255);
	noStroke();

	if(float<5){
		color = 0;
	}else{
		color = 255;
	}
	counter = floor(synchronized/1000);
	ellipseMode(CENTER,CENTER);
	fill(color);
	ellipse(200,200,100,100);

	Pbrowser.html('brow ' + browser);
	Pstandard.html('stan ' + standard);
	Poffset.html('offs ' + offset);
	Psynchronized.html('sync ' + synchronized);
	Pcounter.html(counter);
	
}