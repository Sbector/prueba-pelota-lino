var counter = 0;
var timeleft;
var myDate = "2018-03-13T21:00:00";
var initDate = new Date(myDate);
var UTC = new Date(myDate).toUTCString();
var UTCtoMil = new Date(UTC).getTime();
var toCentralTime = UTCtoMil + (3600000*6);

// conversión de segundos a días, horas y minutos

function convertSeconds(s) {
	//convierte segundos en días
	var day = floor(s/86400);
	//convierte segundos en horas
	var hou = floor(s/3600)%24;
	//convierte segundos en minutos
	var min = floor(s/60)%60;
	//convierte input "s" (milisegundos) en segundos
	var sec = s % 60;
	//regresa los resultados de las conversiones en un sólo String
	return day + ' días ' + nf(hou,2) + ':' + nf(min,2) + ':' + nf(sec,2);
}

// calculo de distancia de fechas en segundos
function differenceOnSeconds(t1) {
	//genera una variable para el input (objeto Date) que será la fehca a comparar
	this.t1 = t1;
	//genera una variable y aloja la fehca actual
	this.t2 = new Date();
	//calcula la diferencia de tiempo en segundos
	this.td = floor ((t1.getTime() - t2.getTime())/1000);
	//regresa el resultado del calculo
	return td;
}

function setup() {

	noCanvas();
	//pruebas de estandarización
	console.log(UTC);
	console.log(UTCtoMil);
	console.log(toCentralTime);
	console.log(initDate.getTime());
	//define time left como el calculo de dfferenceOnSeconds con initDate
	timeleft = differenceOnSeconds(initDate);
	//variable para manipular el elemento DOM con id #timer
	var timer = select('#timer');
	//asigna el valor obtenido con convertSeconds al elemento DOM
	timer.html('faltan ' + convertSeconds(timeleft - counter));
	//asigna un intervalo de 1 seg para la función timeIt
	var interval = setInterval(timeIt, 1000);
	//prueba de differenceOnSeconds
	console.log(differenceOnSeconds(initDate));

	


	// contador
	function timeIt() {
		//incrento del contador
		counter++;
		//asigna el valor obtenido con convertSeconds al elemento DOM
		timer.html('faltan ' + convertSeconds(timeleft - counter));
		//detiene el intervalo al llegar a 0
		if (counter == timeleft) {
			clearInterval(interval);
			counter = 0;
		}
	}
}