
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





//CARRITO

let productosP3 = [
  {
    //0
    nombre: 'Shiseido- Jabón de manos',
    precio: 160,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/84/869/M_p0017986984.jpg'
  },
  {
    //1
    nombre: 'Celimax- Body Brightening pad',
    precio: 300,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/95/022/M_p0110802295.jpg'
  },
  {
    //2
    nombre: 'PureForet- Jabones naturales',
    precio: 550,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/08/933/M_p0129493308.jpg' 
  },
  {
    //3
    nombre: 'TIAM- Anti blemish body lotion',
    precio: 380,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/28/391/M_p0112839128.jpg'
  },
  {
    //4
    nombre: 'BENTON- Gel calmante',
    precio: 240,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/76/805/M_p0117480576.jpg'
  },
  {
    //5
    nombre: 'SOME BY MI- Tratamiento reparador capilar',
    precio: 400,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/37/867/M_p0098386737.jpg'
  },
  {
    //6
    nombre: 'LADOR- Aceite capilar',
    precio: 540,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/74/440/M_p0102144074.jpg'
  },
  {
    //7
    nombre: 'LADOR- Tónico para el cuero cabelludo',
    precio: 560,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/34/438/M_p0102143834.jpg'
  },
  {
    //8
    nombre: 'RNW-Exfoliante para baño',
    precio: 250,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/08/702/M_p0131070208.jpg'
  },
  {
    //9
    nombre: 'SKINFOOD- Gel de baño Limón y Verbena',
    precio: 160,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/18/852/M_p0053685218.jpg'
  },
  {
    //10
    nombre: 'PELICAN SOAP- Jabón desodorante',
    precio: 89,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/37/535/M_p0059953537.jpg'
  },
  {
    //11
    nombre: 'SKINFOOD- Aceite corporal de semilla de uva',
    precio: 430,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/13/852/M_p0053685213.jpg'
  },
  {
    //12
    nombre: 'ETUDE HOUSE- Tinte semi-permanente en espuma',
    precio: 640,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/67/080/M_p0037408067.jpg'
  },
  {
    //13
    nombre: 'KUROBARA- Aceite de camelia',
    precio: 234,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/93/136/M_p0099713693.jpg'
  },
  {
    //14
    nombre: 'SHISSEIDO- Shampoo súper suave',
    precio: 120,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/09/775/M_p0065977509.jpg'
  },
  {
    //15
    nombre: 'THE PURE LOTUS- Tratamiento de hoja de loto',
    precio: 160,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/73/299/M_p0128629973.jpg'
    //TERMINA PAG 3
  },
  {
    //INICIA PAG 4
    //16
    nombre: 'SOME BY MI- Days miracle cream',
    precio: 360,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/15/350/M_p0095035015.jpg'
  },
  {
    //17
    nombre: 'C0SRX- Crema con porpóleo',
    precio: 309,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/07/101/M_p0118410107.jpg'
  },
  {
    //18
    nombre: 'Etude House- Crema hidratante con colageno',
    precio: 350,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/53/149/M_p0046314953.jpg'
  },
  {
    //19
    nombre: 'COSRX- Crema con baba de caracol',
    precio: 370,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/11/813/M_p0056481311.jpg'
  },
  {
    //20
    nombre: 'PYUNKANG YUL- Crema hidartante',
    precio: 340,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/27/911/M_p0070291127.jpg'
  },
  {
    //21
    nombre: 'BENTON- Escencia con baba de caracol',
    precio: 400,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/32/091/M_p0057609132.jpg'
  },
  {
    //22
    nombre: 'IM FROM- Serúm de Ginseng',
    precio: 540,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/14/420/M_p0071142014.jpg'
  },
  {
    //23
    nombre: 'MISSHA- Ampolla de Polen de abeja',
    precio: 560,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/58/457/M_p0089245758.jpg'
  },
  {
    //24
    nombre: 'iUNIK- Serum de vitamina y porpóleo',
    precio: 460,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/08/610/M_p0122061008.jpg'
  },
  {
    //25
    nombre: 'COSRX- Serúm con centella asiática',
    precio: 320,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/62/458/M_p0125245862.jpg'
  },
  {
    //26
    nombre: 'NEOGEN- Set de mascarillas con probióticos',
    precio: 263,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/43/827/M_p0126082743.jpg'
  },
  {
    //27
    nombre: 'MANYO- Galactomy Niacin 2.0 Essence',
    precio: 430,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/86/776/M_p0131777686.jpg'
  },
  {
    //28
    nombre: 'BUENO- Limpiador facial pure moonlight',
    precio: 96,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/78/192/M_p0144019278.jpg'
  },
  {
    //29
    nombre: 'TONY MOLY- Water mist de té verde',
    precio: 216,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/78/192/M_p0144019278.jpg'
  },
  {
    //30
    nombre: 'E NATURE- Mascarilla de hoja BIO-ZEUP',
    precio: 80,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/01/802/M_p0085180201.jpg'
  },
  {
    //31
    nombre: 'VILLAGE 11- Toner Hidratante',
    precio: 430,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/71/959/M_p0084495971.jpg'
  },
  {
    //32
    nombre: 'IM FROM- Tónico de arroz',
    precio: 169,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/70/364/M_p0095536470.jpg'
  },
  {
    //33
    nombre: 'PYUNKANG YUL- Tónico mist',
    precio: 199,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/95/910/M_p0070291095.jpg'
  },
  {
    //34
    nombre: 'NEEDLY- Daily toner pad',
    precio: 200,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/50/212/M_p0147721250.jpg'
  },
  {
    //35
    nombre: 'MANYO- Bruma Bifida Ampoule',
    precio: 430,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/34/771/M_p0131777134.jpg'
  },
  {
    //36
    nombre: 'NELLA- Esencia de Ginseng aclarante de piel',
    precio: 768,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/45/244/M_p0096224445.jpg' 
  },
  {
    //37
    nombre: 'DERMA ELMENTS- Gel suave limpiador',
    precio: 250,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/25/671/M_p0134567125.jpg'
  },
  {
    //38
    nombre: 'PREANGE- Leche facial limpiadora',
    precio: 225,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/83/256/M_p0141325683.jpg'
  },
  {
    //39
    nombre: 'ALIVE LAB- Colageno puro en polvo',
    precio: 430,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/95/014/M_p0130301495.jpg'
    //TERMINA PAG 4
  },
  {
    //INICIA PAG 5
    //40
    nombre: 'HEIMISH- Base con protección solar FPS50',
    precio: 225,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/94/605/M_p0057760594.jpg'
  },
  {
     //41
     nombre: 'BANILA CO- Prime primer',
     precio: 340,
     imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/85/622/M_p0075462285.png'
  },
  {
     //42
     nombre: 'HOLIKA HOLIKA- Holi pop blur cream',
     precio: 350,
     imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/85/939/M_p0069493985.jpg'
  },
  {
     //43
     nombre: 'TOO COOL FOR SCHOOL- Watery blur primer',
     precio: 330,
     imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/00/615/M_p0127961500.jpg'
  },
  {
    //44
    nombre: 'TONYMOLY- Simplast Primer de poros',
    precio: 240,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/99/849/M_p0117984999.jpg'
  },
  {
    //45
    nombre: 'A PIEU- Tinte en mousse Juicy Pang',
    precio: 300,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/73/173/M_p0105417373.jpg'
  },
  {
    //46
    nombre: 'IM MEME- Tinte de labios I m mistery blur 10 colores',
    precio: 640,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/79/067/M_p0111606779.jpg'
  },
  {
    //47
    nombre: '3CE- Pinta labios mate Mood recipe 5 colores',
    precio: 560,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/58/552/M_p0078055258.jpg'
  },
  {
    //48
    nombre: 'I M UNNY- Cover Up tip concealer 3 colores',
    precio: 240,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/13/046/M_p0124004613.jpg'
  },
  {
    //49
    nombre: 'MCQUEEN- Air cover concealer',
    precio: 200,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/30/687/M_p0107168730.png'
  },
  {
    //50
    nombre: 'ETUDE HOUSE- Corrector big cover Pot',
    precio: 540,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/95/103/M_p0072710395.jpg'
  },
  {
    //51
    nombre: 'TONY MOLY- Delineador de pincel en gel negro',
    precio: 160,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/06/131/M_p0046613106.jpg'
  },
  {
    //52
    nombre: 'MERRY MONDE- Super twim pen Eyeliner',
    precio: 240,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/08/895/M_p0143489508.jpg'
  },
  {
    //53
    nombre: 'BLACK ROUGE- Delineador de ojos water proof 2 colores',
    precio: 200,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/01/705/M_p0117370501.jpg'
  },
  {
    //54
    nombre: 'NEOGEN- RAAR style draw slim eyeliner',
    precio: 240,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/03/782/M_p0130878203.jpg'
  },
  {
    //55
    nombre: 'MACQUEEN - Purpurina para ojos Jewel-Poten (3 colores)',
    precio: 160,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/41/392/M_p0093339241.jpg'
  },
  {
    //56
    nombre: 'MOONSHOT- Reve de Paris Eyeshadow palette',
    precio: 450,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/24/142/M_p0114214224.jpg'
  },
  {
    //57
    nombre: '3CE- Paleta de sombras Mood recipe',
    precio: 560,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/62/554/M_p0078055462.jpg'
  },
  {
    //57
    nombre: 'HOLIKA HOLIKA- Paleta de sombras Sweet Peko',
    precio: 489,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/38/459/M_p0087345938.jpg'
  },
  {
    //58
    nombre: 'THE SAEM- Sombra de ojos Saemmul Single shadow',
    precio: 70,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/12/751/M_p0062275112.jpg'
    //TERMINA PAG 5

  },
  {
    //INICIA ETUDE
    //59
    nombre: 'ETUDE HOUSE- Crema hidratante con Colageno',
    precio: 350,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/53/149/M_p0046314953.jpg'
  },
  {
    //60
    nombre: 'ETUDE HOUSE- Lip tint en gel',
    precio: 300,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/91/565/M_p0069856591.jpg'
  },
  {
     //61
     nombre: 'ETUDE HOUSE- Mascarilla para uñas',
     precio: 150,
     imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/19/078/M_p0037407819.jpg'
  },
  {
    //62
    nombre: 'ETUDE HOUSE- Banda para cabello',
    precio: 170,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/03/150/M_p0046315003.jpg'
  },
  {
    //63
    nombre: 'ETUDE HOUSE- Tinte para cabello en espuma',
    precio: 350,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/67/080/M_p0037408067.jpg'
  },
  {
    //64
    nombre: 'ETUDE HOUSE- Look at my eyes Maple road collection',
    precio: 300,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/19/933/M_p0114593319.jpg'
  },
  {
    //65
    nombre: 'ETUDE HOUSE- Paleta de sombras',
    precio: 450,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/39/443/M_p0074444339.jpg'
  },
  {
    //66
    nombre: 'ETUDE HOUSE- Esponja de silicona',
    precio: 70,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/14/572/M_p0069857214.jpg'
  },
  {
    //67
    nombre: 'ETUDE HOUSE- Loción hidratante con protección solar',
    precio: 160,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/42/033/M_p0038403342.jpg'
  },
  {
    //68
    nombre: 'ETUDE HOUSE- Fijador de pestañas',
    precio: 200,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/41/075/M_p0037407541.jpg'
  },
  {
     //69
     nombre: 'ETUDE HOUSE- Bálsamo labial cherry sweet',
     precio: 350,
     imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/07/868/M_p0075986807.jpg'
  },
  {
    //70
    nombre: 'ETUDE HOUSE- Polvos compactos Secret Beam Powder Compact',
    precio: 370,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/16/078/M_p0037407816.jpg'
    //Termina etude
  },
  {
     //71
     nombre: 'Tinte de labios Moonshot 5 colores',
     precio: 190,
     imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/68/109/M_p0134310968.jpg'
  },
  {
     //72
     nombre: 'Nature Republic paleta de sombras',
     precio: 215,
     imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/71/248/M_p0151324871.jpg'
  },
  {
    //73
    nombre: 'DEAR DHALIA polvo traslucido',
    precio: 200,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/80/489/M_p0147448980.jpg'
  },
  {
    //74
    nombre: 'I M UNNY Primer base para maquillaje',
    precio: 215,
    imagen: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/30/046/M_p0124004630.jpg'
  }
]
let miStorage = window.localStorage;


function addCarrito(posicion) {
miStorage.setItem('posicionProducto'+ posicion, posicion)
document.getElementById('cantidadProductos').innerText = miStorage.length;
  console.log(miStorage);
}

let imagenCarro = document.getElementById('carroImagen');
function cargarProductos(){
  if(miStorage.length == 0){
    document.getElementById('texto-carrito').innerText= 'Aún no hay productos en tu carrito 😭'
  }else{
    document.getElementById('texto-carrito').innerText= 'PRODUCTOS DE TU CARRITO 🛒'
    imagenCarro.classList.remove('cartImg')
    imagenCarro.style.display = 'none'
    //aqui oculto la imagen
  }
  document.getElementById('cantidadProductos').innerText = miStorage.length;

  let conetenedor = document.getElementById('contenedor-productos');
  Object.keys(miStorage).map(producto => {
   let card = document.createElement('div');
   let h4 =document.createElement('h4');
   let parrafo = document.createElement('p');
   let imagen = document.createElement('img');
conetenedor.append(card)

   card.append(h4,parrafo,imagen)
   h4.innerText = productosP3[miStorage[producto]].nombre;
   parrafo.innerText = productosP3[miStorage[producto]].precio;
   imagen.src = productosP3[miStorage[producto]].imagen;
   console.log(producto);
   console.log(miStorage);
    card.classList.add('card', 'p-4')
    card.style.width = '300px'
    card.style.marginRight = '30px'

  })
  sumarCosto();
}

//CARRITO

function clearStorage(){
  console.log('clear')
  miStorage.clear();

  console.log('borrar', miStorage)
  window.location.reload();
}


function cargarCantidadProductos(){
  document.getElementById('cantidadProductos').innerText = miStorage.length;
}


function sumarCosto(){
  let suma = 0;

  Object.keys(miStorage).map(producto => {
  suma+= productosP3[miStorage[producto]].precio; 
   })
   document.getElementById('total').innerText = suma;
}
