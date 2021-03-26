//WIP
//hacer los cuentionamientos de los 5xqs


function myFunction() {
  //var x = document.forms["frm1"];
  let texto = "";//texto es un valor vacio
 
  for ( let i = 0; i < 5 ;i++) {//mientras q i valga menos que 5 hara 
    //text += x.elements[i].value + "<br>";
    texto = texto + ' porque' ;// se sigue el ciclo y llega al tope de 5 estamos concatenando lo que vale texto 5 veces pues 5 es nuestro limite

    //document.getElementById("demo").innerHTML = text;
    

  }
  document.getElementById("demo").innerHTML= texto; //imprimimos en pantalla lo que vale texto al final del ciclo
  
  
  
}
