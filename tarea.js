let height = 100;
let width = 100;

function growup() {
  let boton = document.getElementById("grow");
  boton.style.backgroundColor = "Pink";
  boton.style.width = width + "px";
  boton.style.height = height + "px";
  width += 190;
  height += 190;
}
