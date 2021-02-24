/*/let nuevo='adios';
function reversa(o){
    
for( let i=nuevo.length; i>-1; i--){
    nuevo+=o[i];
   }
   return nuevo;
   
}nuevo.forEach(o => {
    console.log(reversa(""));
    
});/*/

//crear un string
let confesion="Me gustan los nuggets";//strng<<
// para no hacer tanto string hacemos un ciclo
let invertida="";
for(let indice = confesion.length-1; indice>=0; indice--){
    //console.log(confesion[indice]);
    invertida+=confesion[indice];// especificar que posicion nos intereza de la variable, en confesion nos intereza de la posicion de indice, si confesion tiene la posicion 6 indice tiene esa.
    
}
console.log(invertida)

//console.log(confesion.length)