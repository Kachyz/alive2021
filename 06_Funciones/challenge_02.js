// Crea una funcion que valide si un número recibido es un número primo o no

// Se realizará la validación de los siguientes valores
 

 numero = [ 7, 33, 821, 1009];

	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}

	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}
