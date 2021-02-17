// Agrega al arreglo 'caracteristicas' los ATRIBUTOS listados en el objeto 'Juanito'

let Juanito = {
  nombre: 'Juan',
  apellido: 'Gonzalez',
  edad: 12,
  estatura: 180,
  apodo: 'Juanillo',
  colorFavorito: 'verde'
}

//inicio
let caracteristicas = Object.values(Juanito);
console.log(caracteristicas);
// Fin de tu código

module.exports = caracteristicas;
