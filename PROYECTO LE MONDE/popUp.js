function surprise() {
    const regalosorpresa = [
    "40% off on shipping",
    "Free shipping",
    "10% discount on your next purchase",
    "$40 off on your next purchase",
  ];
console.log(regalosorpresa)
  const random = Math.floor(Math.random() * regalosorpresa.length);
  console.log(random, regalosorpresa[random]);
  

  if (random == 0) {
    document.getElementById("resultadoSurprise").innerText =
      "40% off on shipping";
      document.getElementById("loco").innerText =  "Use code: MDLM12";
  } else if (random == 1) {
    document.getElementById("resultadoSurprise").innerText = "Free shipping";
    document.getElementById("loco").innerText =  "Use code: MDLM15";
  } else if (random == 2) {
    document.getElementById("resultadoSurprise").innerText =
      "10% discount on your next purchase";
      document.getElementById("loco").innerText =  "Use code: MDLM17";
  } else if (random == 3)
  {
    document.getElementById("resultadoSurprise").innerText =
      "$40 off on your next purchase";
      document.getElementById("loco").innerText =  "Use code: MDLM19";
  }
  document.getElementById("botonSorpresa").disabled =  "true";
  document.getElementById("botonSorpresa").style.display =  "none";
 
  document.getElementById("pop").innerText =  "Claim using the code above";


}

function cerrar() {
  if (cerrar() === false) {
    document.getElementById("popUp").style.display = "none";
    console.log("a ver");
  }
}
//muestra el boton y tiene escondido el popUp
function mostrarPopUp() {
  document.getElementById("popUp").style.marginLeft = "0px";
  document.getElementById("plus").style.marginLeft = "-425px";
}
//muestra el popUp y esconde el boton
function cerrarPopUp() {
  document.getElementById("popUp").style.marginLeft = "-425px";
  document.getElementById("plus").style.marginLeft = "0px";
}
