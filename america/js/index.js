(function(){

	if(navigator.geolocation){

		navigator.geolocation.getCurrentPosition(getCoords,errorFound);


	} else{
		alert("Por favor, actualiza tu navegador");
	}

function errorFound(error){
	alert("Un error ocurrio" + error.code);
	//0: Error desconocido.
	//1: Permiso denegado.
	//2: Posicion no está disponible.
	//3: Timeout.
}

function getCoords(position){
	var lat= position.coords.latitude;
	var lan= position.coords.longitude;
	console.log("Tu posicion es " + lat + "," + lan);

}

})();