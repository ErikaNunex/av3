// 10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
// A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 

let a = 6;

let resultado = 1;
for (let n = a; n >= 1; n--) {
    document.write(n, 'x');

    resultado *= n;
}

document.write("=", resultado);
