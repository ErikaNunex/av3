// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
// decrescente. 

function ordem(){
    let n1= 6
    let n2= 20
    let n3= 122
    let maior = 0;
    let meio = 0;
    let menor = 0;

    if(n1<n2 && n1<n3){
        menor = n1
        if(n2<n3){
            meio=n2
            maior=n3
        }else{
            meio=n3
            maior=n2
        }
    } else if(n1>n2 && n1>n3){
        maior= n1
        if(n2<n3){
            meio=n3
            menor=n2
        }else{
            menor=n3
            meio=n2
        }
    }else{
        meio= n1
        if(n2<n1){
            menor=n2
            maior=n3
        
        }else{
            menor=n3
            maior=n2
        }
    } 
    console.log(maior);
    console.log(meio);
    console.log(menor);    
}
ordem()


/*linhas 5 a 10: declaração de variaveis
linhas 12 a 20 primeira situação: 
                                se n1 for menor, 
                                  n2<n3 é n2 meio e n3 maior
                                  ou n3<n2 é n3 meio e n2 maior
linhas 21 a 29 segunda situação:
                                se n1 for o numero maior,
                                n2<n3 n3 é o numero do meio e n2 o numero menor
                                ou n2>n3 n2 é o do meio e n3 é o menor
linhas 30 a 39 terceira situação:
                                se n1 for o numero do meio,
                                n2<1 n2 é menor e n3 é maior
                                ou n2>1 n2 é maior e n3 é menor
linhas 41 a 43: ordem de aparição no console(decrescente)
linha 45: comando de execusão da função */