var B;

function setup() {
	createCanvas(windowWidth, windowHeight);
	B = new ball();
	frameRate(24);
}

function draw() {
	background(255);
	var f = new p5.Vector(0,5);
	B.update();
	B.ground();
	B.display();
	B.applyForce(f);

}

function ball() {
	this.loc = new p5.Vector(windowWidth/2,150);
	this.vel = new p5.Vector(0,0);
	this.acc = new p5.Vector(0,5);

	this.update = function() {
		this.vel.add(this.acc);
		this.loc.add(this.vel);
	}

	this.ground = function() {
		if(this.loc.y>windowHeight - 150) {
			this.loc.y = windowHeight - 150;
			this.vel.y = -(this.vel.y);
			console.log("bote");
		}
	}

	this.display = function() {
		noStroke();
		fill(100);
		ellipse(this.loc.x, this.loc.y, 50, 50);
	}

	this.applyForce = function(force) {
		this.acc = force;
	}
}