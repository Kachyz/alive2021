// Agrega al arreglo 'caracteristicas' los ATRIBUTOS listados en el objeto 'Juanito'

let Juanito = {
  nombre: 'Juan',
  apellido: 'Gonzalez',
  edad: 12,
  estatura: 180,
  apodo: 'Juanillo',
  colorFavorito: 'verde'
}
let caracteristicas = Object.values(Juanito); //sacar todos los valores que hay en JUANITO
console.log(caracteristicas);

// Inicio de tu código


// Fin de tu código

module.exports = caracteristicas; 