
//AUDIO
let play = true;
// creamos el objeto audio
var audioElement = document.createElement('audio');
var element = document.getElementById('icon')
// indicamos el archivo de audio a cargar
audioElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0089/5028/4345/t/3/assets/Kygo_-_Sexual_Healing_Martin_Gaye.mp3?v=1585795263');


function reproducir() {

    if (play) {
        console.log('play');
       
        // iniciamos el audio
        audioElement.play();
        play = false;
        //document.getElementById('play').innerText='Pausa';
        //document.getElementById("icon").classList.add("fa-pause");
        element.classList.remove('fa-volume-up')
        element.classList.add('fa-volume-off');
    } else {
        element.classList.add('fa-volume-up');
        console.log('pause');

        // hacemos pausa
        audioElement.pause();
       
    
        //document.getElementById('play').innerText='Play';
        play = true;
    }

};



//AUDIO



//MODAL
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


//MODAL 2
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
