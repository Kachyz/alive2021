

 
function registro() {
   let container = document.getElementById('contenedor');
   let carta = document.createElement("div");
   let h2 = document.createElement("h2");
   let h22 = document.createElement("p");
   let h23 = document.createElement("p");

   container.append(carta);
   carta.append(h2, h22, h23);

  // card.classList.add('divi');
   carta.classList.add("cartita");
   h2.classList.add("titulo");
   h22.classList.add("titulo");
   h23.classList.add("titulo");

   h2.innerText = "TUS DATOS SON"
   h22.innerText =  document.getElementById('email').value;
   h23.innerText =  document.getElementById('contraseña').value;

  
   document.getElementById('email').value = "";
   document.getElementById('contraseña').value = "";
}