//Creación de un objeto, almacenado en la varibale persona
let persona = {
    nombre: 'Hiromi',
    telefono: 222222222,
    pais: 'México'
}

//Muestro todo el objeto
console.log(persona);
//Muestro el telefono de la persona
console.log(persona.telefono);


//Creación de un objeto, almacenado en la varibale mascota

let mascota = {
    nombre: 'Dino',
    edad: 2,
    color: 'café',
    duenio: {
        nombre: 'Cristo',
        edad: 16,
        direccion: {
            calle: 'Patria',
            numero: 22
        }
    }
}

//Muestro el objeto mascota
console.log(mascota);
//Muestro el nombre del objeto mascota
console.log(mascota.nombre)
//Muestro la edad del objeto mascota
console.log(mascota.edad)
//Muestro el color del objeto mascota
console.log(mascota.color)
//Muestro la calle que está dentro de un objeto que a su vez está dentro de otro objeto y dentro de otro
console.log(mascota.duenio.direccion.calle);
//ppodemos mostar varias cosas del objeto
console.log('Mi mascota se llama: ' + mascota.nombre + ' y tiene ' + mascota.edad+ ' años')
//Reemplazo la propiedad nombre de la mascota
mascota.nombre = 'Nacho';
//Muestro la mascota nuevamente
console.log(mascota);

let auto = {
    color: 'rojo',
    puertas: 5,
    anio: 2000
}

console.log(auto);



