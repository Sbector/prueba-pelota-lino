// declara variables para los elementos P 
var Pbrowser, Pstandar, Poffset, Psynchronized, Pcounter;
// declara variable para el contador
var counter = 0;
// declara variable para cambio de color
var color;


// función que estandariza el tiempo en UTC
function standardTime () {
	// crea una variable UTC y aloja una nueva fecha en ella
	this.UTC = Date.now();
	// regresa el valor de obtenido
	return this.UTC;
}


function setup() {
	// crea un canvas de 400 x 400
	createCanvas(400,400);
	// asigna los elementos P por ID a cada variable P
	Pbrowser = select('#browser');
	Pstandard = select('#standard');
	Poffset = select('#offset');
	Psynchronized = select('#synchronized');
	Pcounter = select('#counter');
}

function draw() {
	// crea una variable y le asigna el tiempo del navegador en ms
	var browser = new Date().getTime();
	// crea una variable para alojar el tiempo previamente estandarizado
	var standard = standardTime();
	// crea una variable para alojar el offset entre el tiempo del servidor
	// y el tiempo del navegador
	var offset = ServerDate - new Date();
	// crea una variable para sincronizar con el tiempo del servidor
	var synchronized = standard  + (offset);
	// crea una variable que convierte los ms de synchronized en s
	var float = synchronized%1000/100;

	background(255);
	noStroke();
	// condición basada en floar para cambiar de color
	if(float<5){
		color = 0;
	}else{
		color = 255;
	}
	// asigna a counter los s de synchronized en integrales
	counter = floor(synchronized/1000);
	ellipseMode(CENTER,CENTER);
	fill(color);
	ellipse(200,200,100,100);

	// asigna las variables a los elementos html
	Pbrowser.html('brow ' + browser);
	Pstandard.html('stan ' + standard);
	Poffset.html('offs ' + offset);
	Psynchronized.html('sync ' + synchronized);
	Pcounter.html(counter);
	
}