// Dada una variable color, revisa si es ROJO o AZUL e imprime el color resultante de su combinacion con AMARILLO

let color = "x"
let rojo = "rojo"
let azul = "azul"

if ((color == rojo) || (azul)) {
    console.log("Si son iguales")

    if (color == rojo) {
        console.log("Rojo + amarillo = NARANJA")
    } 
    
    if (color == azul) {
        console.log("Azul + amarillo = VERDE")
    }
}