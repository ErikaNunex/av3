// 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo;
// b. A maior altura do grupo; 

let altura = [1.70
            ,1.60,
            1.20,
            2.0,
            1.63,
            1.6,
            1.8,
            1.55,
            1.6,
            1.4,
            1.9,
            1.43,
            1.5,
            1.91]
let alturaMaior = 0;
let alturaMenor = 0;

for(let i = 0; i < altura.length ; i++){ 
    
    if(alturaMenor === 0){
        alturaMenor = altura[i]
    }
    if(altura[i]>alturaMaior){
        alturaMaior= altura[i]
    }
   
}
console.log('Maior altura:', + alturaMaior)
console.log('Menor altura:', + alturaMenor)