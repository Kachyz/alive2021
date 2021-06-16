function nombres() {
  nombre1 = document.getElementById("fname");
  nombre2 = document.getElementById("lname");
  nombre1.value = "Julieta";
  nombre2.value = "Gomez";
}

function datos() {
  user = document.getElementById("username");
  psw = document.getElementById("pwd");
  user.value = "licenciadoPapa";
  psw.value = "1234";
}

function genero() {
  radio3 = document.getElementById("other");

  radio3.checked = true;
}

function vehiculo1() {
  vehi1 = document.getElementById("vehicle3");

  vehi1.checked = true;
  //le cambie el name de vehicle 1,2,3 a cada uno para que fuera el mismo name y se borrara la seleccion anterior
}

//Crear una función que compare tres de los valores de los inputs que creamos y arrojar un texto en un alert
function alerta() {
  dato1 = document.getElementById("fname").value;
  dato2 = document.getElementById("lname").value; //agarra los valores de mis datos
  dato3 = document.getElementById("username").value;
  numero = document.getElementById("num").value;
  let nuevo = document.getElementById("insertar");

  if ((dato1 == "John" && dato2 == "Doe") || (dato3 == "licenciadopapa" ) || (numero <= 20)) {
    //hace la condicion si este o este o este entonces es bienvenido
    alert("Bienvenido John Doe");
  } else {
    alert("Intenta de nuevo"); //si ninguno es correcto
  }
  console.log("mango");


//De nuestros 3 parámetros, uno tiene que ser un número; si los dos primeros o el último se completan, entonces con la cantidad que se puso en el tercer input insertar radios o checkboxes
if (numero){
  let numero1 = parseInt(numero);
  //console.log ("okis");
   for (let i=0; i < numero1; i++){
     let agregarInputRadios = document.createElement("input");
     agregarInputRadios.setAttribute("type", "radio");
     nuevo.append(agregarInputRadios);
   }
}else{
    alert ("Este valor no es admitido") 
}
}
