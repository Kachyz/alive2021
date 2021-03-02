// La variable operació puede ser 'suma' o 'resta', de acuerdo a esta variable suma o resta los números e impríme el resultado.

function operacion(opcion) {
    let operacion = opcion;

    let num1 = 10;

    let num2 = 4;

    //Tu código
    //comparaciones estrictas
    if (operacion === 'resta') {
        console.log('resta');
        console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
    } else if(operacion === 'suma') {
        console.log('suma');
        console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
    } else {
        console.log('no sé hacer esa operación');
    }
}




