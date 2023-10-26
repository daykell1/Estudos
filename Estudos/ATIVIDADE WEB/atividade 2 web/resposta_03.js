/*
03) Escreva uma função arrow que receba dois parâmetros: início e fim. Essa função deve
imprimir todos os números primos que estão entre esses valores. Por padrão os valores devem
ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função
receba o valor maior antes do menor.
*/

let inicio = 0
let fim = 100

const primos =(inicio, fim)=>{
    if ( inicio>fim){
        let aux= fim
        fim=inicio
        inicio= aux
    }
    for (let i=inicio; i<fim; i++){
        let primo=true
        for (let j=2; j<i; j++) {
            if ( i%j==0 ){
                primo=false
            }
            }
            if(primo && i!=0 && i!=1){
                console.log(i)
            }
    } 
}
primos(fim,inicio)
