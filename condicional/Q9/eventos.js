// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
// calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7.

let altura = prompt('digite a sua altura');
let sexo = prompt('homem ou mulher?');
let pesoIdealM = (62.1 * altura) - 44.7;
let pesoIdealH = (72.7 * altura) - 58;

if(sexo==='homem'){
    console.log('Peso ideal:',pesoIdealH );
  } else if(sexo==='mulher'){
    console.log('Peso ideal:',pesoIdealM );
}
