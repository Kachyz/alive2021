let fontSize= 80;

function crece(){
    let botone= document.getElementById('aCrecer');//extrae lo que hay en aCrecer
    botone.style.fontSize= fontSize + 'px';//declaramos 
      // botone.style.backgroundColor="yellow";
       console.log(botone.style.fontSize);
       if (botone.style.fontSize=="120px"){
        botone.style.backgroundColor="purple";
    }  if (botone.style.fontSize=="180px"){
        botone.style.backgroundColor="red";
    } if  (botone.style.fontSize=="220px"){
        botone.style.backgroundColor="pink";
    }  if  (botone.style.fontSize=="240px"){
        botone.style.backgroundColor="blue";
        botone.disabled=true;
        alert("aguanta ya no se puede mAs")
    }
       fontSize+= 20;//abajo del if 
    
    } 

 console.log("kk")



