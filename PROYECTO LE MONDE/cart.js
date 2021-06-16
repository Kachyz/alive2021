console.log(document.getElementById("total"));
let productos = [
  {
    nombre: "Fendi- wide-leg high-rise trousers",
    precio: 930,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/78/97/72/16789772_33196458_1000.jpg",
  },
  {
    nombre: "Ganni- drawstring logo flower print shoulder bag ",
    precio: 377,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/84/37/29/16843729_20b7953d-4aed-4d3b-a18a-914f87f640c9_1000.jpg",
  },
  {
    nombre: "Ganni- crossbody bag with smiles",
    precio: 188,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/84/52/11/16845211_ab8a978c-b0b3-475b-804d-3d30fbf30bdf_1000.jpg",
  },
  {
    nombre: "Alexander McQueen-  Tread Slick boots",
    precio: 804,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/70/99/26/16709926_32763019_300.jpg",
  },
  {
    nombre: "Marine Serre- Crescent moon print top",
    precio: 292,
    imagen:
      "https://cdn-images.farfetch-contents.com/15/07/82/20/15078220_27702279_1000.jpg",
  },
  {
    nombre: "Rick Owens- Plaid coat",
    precio: 1910,
    imagen:
      "https://cdn-images.farfetch-contents.com/13/31/36/07/13313607_14936237_480.jpg",
  },
  {
    nombre: "Ganni- Chunky sole oxford shoes",
    precio: 390,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/20/89/60/16208960_30853801_300.jpg",
  },
  {
    nombre: "Chloé- Betty 50mm heel ankle boots",
    precio: 590,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/17/20/05/16172005_32343823_1000.jpg",
  },
  {
    nombre: "Off-White- Shirt with logo",
    precio: 333,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/63/70/14/16637014_32484526_1000.jpg",
  },
  {
    nombre: "Piferi- Merlin 85mm heel ankle boots",
    precio: 404,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/11/50/53/16115053_30270310_1000.jpg",
  },
  {
    nombre: "Off-White- Frayed cropped denim shirt",
    precio: 773,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/25/42/52/16254252_32600434_480.jpg",
  },
  {
    nombre: "12 Storezz- check print shorts",
    precio: 89,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/84/12/35/16841235_33606361_480.jpg",
  },
  {
    nombre: "Eéra- Chiara 18kt gold diamond earring",
    precio: 1921,
    imagen:
      "https://cdn-images.farfetch-contents.com/14/10/73/82/14107382_32709397_1000.jpg",
  },
  {
    nombre: "Balenciaga Eyewear- Dinasty BB cat eye sunglasses ",
    precio: 1900,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/26/26/78/16262678_32505679_480.jpg",
  },
  {
    nombre: "Maison Margiela- crossbody bag 11 mini",
    precio: 1362,
    imagen:
      "https://cdn-images.farfetch-contents.com/16/03/42/98/16034298_cdac7cc0-b3ee-4b7f-8ff7-180663f80fe7_1000.jpg",
  },
];

let cantidadProductos = 0;

function addcart(posicion) {
  miStorage.setItem("posicionProducto" + posicion, posicion);
  document.getElementById("cantidadProductos").innerText = miStorage.length;
  console.log(miStorage);
}

function cargarProductos() {
  /*/if (miStorage.length == 0 || (miStorage.length = 1 && miStorage.usuario)) {
    document.getElementById("anuncioShopingCart").innerText = "Start shopping";
  } else {
    document.getElementById("anuncioShopingCart").innerText = "Products";
  }/*/
  let contenedor = document.getElementById("products");
  Object.keys(miStorage).map((productos) => {
    if ((productos = !"usuario")) {
      let card = document.createElement("div");
      let productTitle = document.createElement("h2");
      let precio = document.createElement("p");
      let image = document.createElement("img");
      contenedor.append(card);
      card.append(productTitle, precio, image);

      productTitle.innerText = productos[miStorage[producto]].nombre;
      precio.innerText = productos[miStorage[producto]].precio;
      image.src = productos[miStorage[producto]].imagen;
      console.log(producto);
      console.log(miStorage);
      card.classList.add("card", "p-4");
      card.style.width = "300px";
      card.style.marginRight = "30px";
    }
  });
  sumarCosto();
}

function sumarCosto() {
  let suma = 0;

  Object.keys(miStorage).map((producto) => {
    if(productos != "usuario"){
      suma += productos[miStorage[producto]].precio;
    }
  });
  console.log(document);
  document.getElementById("total").innerText = suma;
}
cargarProductos();