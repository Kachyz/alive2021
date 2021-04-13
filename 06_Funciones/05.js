// Crea una funcion que reciba 2 numeros y regresa la división del primero sobre el segundo
// Valida que la operación pueda ser procesada, de lo contrario regresa un mensaje de error

function division(num1, num2){
    if (num1 > 0 && num2 > 0){
        resultado = num1 / num2;
        console.log(resultado)
    }else {
        return "la operación no es posible, error";
    }

}
division(0, 0); 
