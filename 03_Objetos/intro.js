let persona = {
    nombre: 'Hiromi',
    telefono: 222222222,
    pais: 'México'
}

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

console.log(mascota.duenio.direccion.calle);

let auto = {
    color: 'rojo',
    puertas: 5,
    anio: 2000
}

console.log(persona);
console.log(persona.telefono);

console.log(mascota);
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.color)

console.log('Mi mascota se llama: ' + mascota.nombre + ' y tiene ' + mascota.edad+ ' años')

console.log(auto);

mascota.nombre = 'Nacho';

console.log(mascota);

