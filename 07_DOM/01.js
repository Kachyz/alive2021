// // WIP
function FuncionPrueba(){
  let varUno = "";
  // alert('Debuguear funcion');
  for(i=0; i<5; i++){
    varUno = varUno + ' ¿Por qué?'
  }
  document.getElementById("porquee").innerHTML = varUno;
}

// let ancho = 200;
// let alto = 200;
let tamañoLetra = 100;
function Crecer(){
  let boton = document.getElementById("masGrande");
  boton.style.backgroundColor = "#3B0B17";
  boton.style.color = "#F8E0E6";
  let botoon = document.getElementById("MasGrande");
  botoon.style.backgroundColor = "#220A29";
  botoon.style.color = "#E3CEF6";
  // boton.style.width = ancho + "px";
  // boton.style.height = alto + "px";
  boton.style.fontSize = tamañoLetra + "px";
  // ancho += 50;
  // alto += 50;
  tamañoLetra += 50;
}
// ver si le pongo un if en el que, cuando alcance cierto tamaño, se le ponga otro background
// function activar(){
//   let variableUno = '';
//
//     for (let i = 1; i <= 5; i++) {
//
//      // document.getElementById("demo").innerHTML = "porque";
//      variableUno = variableUno + ' porque' ;
//
//      if(i == 3){
//         variableUno = variableUno + ' adiós' ;
//         document.getElementById("demo").innerHTML = "porque si";
//      }
//
//     }
//     alert(variableUno);
//
//   }


// TAREA :|
// Con una funcion y un ciclo de java script, hacer mas grande un boton, cada que se opriima el mismo
