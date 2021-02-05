//arreglo de regalos del a;o
//arreglo de a cada cantidad del areglo anterior le regalos

let presentsOfTheYear = [100, 20, 50, 400, 600];
let meQuitaronMisPapas = [presentsOfTheYear[0] *0.7, presentsOfTheYear[1]*0.7, presentsOfTheYear[2]*0.7, presentsOfTheYear[3]*0.7, presentsOfTheYear[4]*0.7, ]

//presentsOfTheYear.forEach(element =>  meQuitaronMisPapas.push(element*0.7) );

let sumaRegalos = presentsOfTheYear[0] + presentsOfTheYear[1] + presentsOfTheYear[2] + presentsOfTheYear[3] + presentsOfTheYear[4];
let sumaMenosTreinta = meQuitaronMisPapas [0] + meQuitaronMisPapas [1] + meQuitaronMisPapas [2] + meQuitaronMisPapas [3] + meQuitaronMisPapas [4];

//let totalCompleto = 0;
//let totalMenosPapas = 0;

//presentsOfTheYear.forEach(element0 => totalCompleto += element0);
//meQuitaronMisPapas.forEach(element0 => totalMenosPapas += element0);

console.log(sumaRegalos, sumaMenosTreinta);
