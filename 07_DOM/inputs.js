

function texto(){
let texto1 = document.getElementById("fname");
let texto2 = document.getElementById("lname");

texto1.value = "Julio"
texto2.value = "Godinez"
console.log('hola')
}

function genero(){
let select = document.getElementById("other");

select.checked = true;

}
/////////////////////Práctica Adon martes que no vine///////////////////////////////////

function registroSecreto(){
    let nombre = document.getElementById("nombre1").value;
    let apellido = document.getElementById("nombre2").value;
    let numero = document.getElementById("numeros").value;
    let contenedor = document.getElementById('contenedorInput');
    

    if ((nombre == "Julia" && apellido == "Ramirez") ||( numero <= 50)){
    alert("Bienvenida");

    }else{ 
    
        alert("INTRUSO DETECTADO, PROTEGIENDO CUENTA...")
}




if(numero){
    let num = parseInt(numero);
console.log("si hay un número");
for (let i = 0; i < num; i++) {
    let inputz = document.createElement("input");
    inputz.setAttribute("type", "radio");
    contenedor.append(inputz );
}  
}else{
    console.log('no hay número');
}
}

