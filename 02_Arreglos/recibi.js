//Crear un arreglo de la cantidad de dinero que recibí cada mes
let arreglo1 = ["150" , "100" , "500" , "300" , "200"]

let mes1 = arreglo1[0] * 0.3
let mes2 = arreglo1[1] * 0.3
let mes3 = arreglo1[2] * 0.3
let mes4 = arreglo1[3] * 0.3
let mes5 = arreglo1[4] * 0.3

let soloDescuentos = (mes1 + mes2 + mes3 + mes4 + mes5)

console.log("Valor cada mes" , mes1 , mes2 , mes3 , mes4 , mes5)
console.log("Solo Descuentos total" , soloDescuentos)

//Crear un arreglo de la cantidad de dinero que recibí cada mes con el descuento aplicado (30%)
let arreglo2 = [mes1 , mes2 , mes3 , mes4 , mes5]

let mes1Des = arreglo1[0] - mes1
let mes2Des = arreglo1[1] - mes2
let mes3Des = arreglo1[2] - mes3
let mes4Des = arreglo1[3] - mes4
let mes5Des = arreglo1[4] - mes5

let descuentosAplicados = (mes1Des + mes2Des + mes3Des + mes4Des + mes5Des)

console.log("Valor cada mes con Descuento" , mes1Des , mes2Des , mes3Des , mes4Des , mes5Des)
console.log("Total con Descuentos" , descuentosAplicados)