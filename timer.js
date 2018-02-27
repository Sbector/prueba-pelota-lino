var iniDate = new Date("2018-03-13T21:00:00");
var actDate = new Date();
var dif;
var counter = 0;

// conversión de segundos a días, horas y minuto

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

// estandariza la hora en diferentes dispositivos o navegadores

function standardTime (date){
	this.date = date;
	this.UTC = new Date(date).toUTCString();
	this.UTCtoMil = new Date(this.UTC).getTime();
	this.toCentralTime = this.UTCtoMil + (3600000*6);
	return this.toCentralTime;
}


// calculo de distancia de fechas en segundos
function differenceOnSeconds(t1,t2) {
	//genera una variable para el input1 que será la fecha a comparar (mili)
	this.t1 = t1;
	//genera una variable para el input2 que será la fehca actual (mili)
	this.t2 = t2;
	//calcula la diferencia de tiempo en segundos
	this.td = floor ((t1 - t2)/1000);
	//regresa el resultado del calculo
	return this.td;
}

function setup() {
	
	dif = differenceOnSeconds(standardTime(iniDate), standardTime(actDate));

	var date = select('#date');
	var dateOff = select('#dateOff');
	
	var interval = setInterval(timeIt, 1000);

	function timeIt() {
		//offset entre tiempo del servidor y el del navegador
		this.calcOff = ServerDate- new Date();
		//incrento del contador
		counter++;
		//asignael offset al elemento DOM #dateOff
		dateOff.html(this.calcOff);
		//asigna el valor obtenido con convertSeconds al elemento DOM
		date.html('faltan ' + convertSeconds(dif - counter));
		//detiene el intervalo al llegar a 0
		if (counter == dif) {
			clearInterval(interval);
			counter = 0;
		}
	}	
}