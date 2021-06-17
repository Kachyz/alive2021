function comienza() {
  let hora = document.getElementById('horas').value; //traigo las horas que ingreso el usuario
  let minutos = document.getElementById('minutos').value; //me traigo los minutos que ingreso el usuario
  let segundos = document.getElementById('segundos').value; //me traigo los segundos que ingreso el usuario
  let alive = document.getElementById('alive'); //me treigo la playlist
  let seg = 1000*segundos; //convierto los segundos ingresados a milisegundos
  let min = 6000*minutos;//convierto los minutos ingresados a milisegundos
  let hrs = 36000*hora;//convierto las horas ingresadas a milisegundos
  let total = hrs + min + seg;  //sumo todo en milisegunods
  let playBtn = document.querySelector('iframe#alive');
  playBtn.postMessage('play', 'http://embed.spotify.com/'); /// Will play
  if (e.origin == 'http://embed.spotify.com') {

     if (e.data.action == 'playbackStarted')  { /* On playback started */

     }

   }
  console.log(total); //esto es solo una prueba para verificar que este bien vinculado

  setTimeout(function(){ alive.play(); }, total); //funcion que cuanta los milisegundos para ejecutar la playlist
  // hora.value = ' '; //limpia la casilla
  // minutos.value = ' '; //limpia la casilla
  // segundos.vale = ' '; //limpia la casilla

}
