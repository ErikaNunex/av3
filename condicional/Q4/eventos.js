// 4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se 
// somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se 
// atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

let a = 10
let b = 10
let c = 0
if(a === b){
    c= a+b;
    document.write('igual:', c)
}else{
    c= a*b;
    document.write('diferente:', c)
}

// linhas  5,6 e 7: declaração de variaveis
// linha 8 condição
// linhas 9,10,12 e 13: o valor da variavel c é a soma das varia veis a e b ou a mutiplicação das mesmas,
//                     respectivamente; "document.write(resultado)" é usado para que o resultado atribuído a c seja 
//                     mostrado na tela.