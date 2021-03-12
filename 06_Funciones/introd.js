//una funcion se encarga de resolver un problema
//dentro de la funcion hay pasos o instrucciones para solucionar el problema


//palabra reservada "function" nombredelafuncion parentesis y llaves>>
function funcion1(){
}

//funcion para mostrar un mensaje
function mensajito(){
    console.log( 'hello!');
}
//para llamar la funcion y que haga lo que debe
mensajito();
console.log("1.SIGUIENTE ACT")

//funcion de numeros
function numeritos (){
    for(let i=1; i<=10; i++)
    console.log(i);
}
numeritos()
console.log("2. SIGUIENTE ACT")

//Parametros>>>
//Crear funcion con parametros
function duplicar(numero){
    console.log(numero*2);
}
//mandar a llamar la funcion que necesita un parametro
duplicar(10);
duplicar(5);
duplicar(2.8);
console.log("3. SIGUIENTE ACT")

//Crear funcion con dos parametros..le pido dos cosas

function sumar(n1,n2){
    console.log(n1+n2)
}
sumar(2,10);
sumar(90,7);

//con los numeros ya dados
let nm1= 10;
let nm2= 20;
sumar(nm1,nm2);

console.log("4.SIGUIENTE ACT")

//hacer lo anterior con un prompt
//parseInt= necesario para cambiar el texto a numero, necesario poner todo despues en un parentesis
let num1=parseInt(prompt("ingresa dato 1"));
//console.log(num1) era para probar si un decimal lo redondeaba
let num2=parseInt(prompt("ingresa dato 2"));
sumar(num1,num2);
console.log("5. SIGUIENTE ACT")

// act con condicionales

function calculacion(number1,number2, operar){//number son los parametros, operar lo que va a ahcer
    operar=operar.toLowerCase(); //para que independientemente de como lo escribas en mayuscula se hace minuscula y lo valida bien
    //si lo quieres hacer en mayuscula todo el string se pone igual que antes pero toUpperCase!!
    if (operar==="suma"){//si es suma  hace>>
        console.log("la suma es :"+(number1+number2));

    }else if(operar ==="resta"){ //si es resta hace>>
        console.log ("la resta es :"+(number1-number2));
    } else{
        console.log("opcion no valida");
    }
}
calculacion (10,20,"suma");
calculacion (10,4,"resta");
calculacion (3,1, "sumar");//para que diga que no es valido pues no coincide
calculacion  (3,3, "SuMa");
console.log("6. SIGUIENTE ACT")
