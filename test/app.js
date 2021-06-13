const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

//no se que es AddEventListener !PREGUNTA/INVESTIGA

open.addEventListener('click',() =>{
    modal_container.classList.add('show')
})

close.addEventListener('click',() =>{
    modal_container.classList.remove('show')
})

//FUNCIONES DE AUDIO//

window.onload=function(){
 
    // creamos el objeto audio
    var audioElement = document.createElement('audio');

    // indicamos el archivo de audio a cargar
    audioElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0089/5028/4345/t/3/assets/Kygo_-_Sexual_Healing_Martin_Gaye.mp3?v=1585795263');

    // Si deseamos que una vez cargado empieze a sonar...
    audioElement.setAttribute('autoplay', 'autoplay');

    document.getElementById("play").addEventListener("click", function() {
        // Si deseamos que inicie siempre desde el principio
        //audioElement.currentTime = 0;

        // iniciamos el audio
        audioElement.play();
    });

    document.getElementById("pause").addEventListener("click", function() {
        // hacemos pausa
        audioElement.pause();
    });
};



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}