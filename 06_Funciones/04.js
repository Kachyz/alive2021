// Crea una funcion que reciba un numero N y una palabra
// La funcion debe imprimir la palabra N cantidad de veces de acuerdo a lo que se especificó
let numero= 4;//le da la cantidad de veces que se repita, se puede com prompt 

function repeticion(){
    for(let i=1; i<=numero; i++)// i es 1, i va a realizarce siempre y cuando sea mayor o igual a numero; i va a aumentar de 1
    console.log("perros mojados");// la palabra que va a salir en el console
    

}
repeticion(); //llamamos la funcion para que repita la palabra las veces solicitadas
//otra forma
function repetir(repeticiones, palabrita){
    for(let o=1; o<=repeticiones; o++){
        console.log(palabrita, o)
    }
}
repetir(34, "coman pollo con papas")