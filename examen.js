let palabra = ['H', 'O', 'L', 'A'];

palabra[0] = palabra[3];
palabra[1] = palabra[2];

palabra[2] = palabra[1];
palabra[3] = palabra[0];

console.log(palabra)