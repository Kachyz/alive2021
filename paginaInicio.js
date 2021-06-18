function comienza() {
  let hora = document.getElementById('horas').value; //traigo las horas que ingreso el usuario
  let minutos = document.getElementById('minutos').value; //me traigo los minutos que ingreso el usuario
  let segundos = document.getElementById('segundos').value; //me traigo los segundos que ingreso el usuario
  let alive = document.getElementById('alive'); //me treigo la playlist
  let seg = 1000*segundos; //convierto los segundos ingresados a milisegundos
  let min = 6000*minutos;//convierto los minutos ingresados a milisegundos
  let hrs = 36000*hora;//convierto las horas ingresadas a milisegundos
  let total = hrs + min + seg;  //sumo todo en milisegunods
  // let playBtn = document.querySelector('iframe#alive');
  // playBtn.postMessage('play', 'http://embed.spotify.com/'); /// Will play
  // if (e.origin == 'http://embed.spotify.com') {
  //
  //    if (e.data.action == 'playbackStarted')  { /* On playback started */
  //
  //    }
  //
  //  }
  console.log(total); //esto es solo una prueba para verificar que este bien vinculado

  setTimeout(function(){ alert("Reproduciendo Alive"); }, total); //funcion que cuanta los milisegundos para ejecutar la playlist
  // hora.value = ' '; //limpia la casilla
  // minutos.value = ' '; //limpia la casilla
  // segundos.vale = ' '; //limpia la casilla
}


function comienza1() {
  let hora1 = document.getElementById('horas1').value; //traigo las horas que ingreso el usuario
  let minutos1 = document.getElementById('minutos1').value; //me traigo los minutos que ingreso el usuario
  let segundos1 = document.getElementById('segundos1').value; //me traigo los segundos que ingreso el usuario
  let manana = document.getElementById('manana'); //me treigo la playlist
  let seg1 = 1000*segundos1; //convierto los segundos ingresados a milisegundos
  let min1 = 6000*minutos1;//convierto los minutos ingresados a milisegundos
  let hrs1 = 36000*hora1;//convierto las horas ingresadas a milisegundos
  let total1 = hrs1 + min1 + seg1;  //sumo todo en milisegunods
  // let playBtn = document.querySelector('iframe#manana');
  // playBtn.postMessage('play', 'http://embed.spotify.com/'); /// Will play
  // if (e.origin == 'http://embed.spotify.com') {
  //
  //    if (e.data.action == 'playbackStarted')  { /* On playback started */
  //
  //    }
  //
  //  }
  console.log(total1); //esto es solo una prueba para verificar que este bien vinculado

  setTimeout(function(){ alert("Reproduciendo rolitas mañaneras"); }, total1); //funcion que cuanta los milisegundos para ejecutar la playlist
  // hora.value = ' '; //limpia la casilla
  // minutos.value = ' '; //limpia la casilla
  // segundos.vale = ' '; //limpia la casilla
}
function comienza2() {
  let hora2 = document.getElementById('horas2').value; //traigo las horas que ingreso el usuario
  let minutos2 = document.getElementById('minutos2').value; //me traigo los minutos que ingreso el usuario
  let segundos2 = document.getElementById('segundos2').value; //me traigo los segundos que ingreso el usuario
  let study = document.getElementById('study'); //me treigo la playlist
  let seg2 = 1000*segundos2; //convierto los segundos ingresados a milisegundos
  let min2 = 6000*minutos2;//convierto los minutos ingresados a milisegundos
  let hrs2 = 36000*hora2;//convierto las horas ingresadas a milisegundos
  let total2 = hrs2 + min2 + seg2;  //sumo todo en milisegunods
  // let playBtn = document.querySelector('iframe#study');
  // playBtn.postMessage('play', 'http://embed.spotify.com/'); /// Will play
  // if (e.origin == 'http://embed.spotify.com') {
  //
  //    if (e.data.action == 'playbackStarted')  { /* On playback started */
  //
  //    }
  //
  //  }
  // console.log(total); //esto es solo una prueba para verificar que este bien vinculado

  setTimeout(function(){ alert('Reproduciendo study'); }, total2); //funcion que cuanta los milisegundos para ejecutar la playlist
  // hora.value = ' '; //limpia la casilla
  // minutos.value = ' '; //limpia la casilla
  // segundos.vale = ' '; //limpia la casilla
}
