/*
01) Escreva duas funções arrow, uma para progressão aritmética e outra para progressão
geométrica. Estas funções receberam como parâmetros um objeto (criado por você, lembre-se
que deves escolher bons nomes) contendo os seguinte parâmetros: id: Number (identificador
da função); nome: String (nome da função); n: Number (número de termo), a1:Number (o
primeiro termo) e :Number (a razão). Esse objeto vai ser passado com parâmetro para as duas
funções, e com o uso do operador de desestruturação, só devem ser passados como
parâmetros os atributos n, a1 e r. As funções devem imprimir os n termos, bem como a soma
dos elementos.
*/
let objeto={

    id: 1,
    nome: 'Dayane',
    n: 2,
    a1:3,
    r: 5 
}

const progressaoAritmetica=({a1,n,r})=>{
    console.log(`Progressão Aritmética:`);
    let soma = 0
    let pA = a1
    for (let i=0;i<n ;i++){
        console.log(pA);
        soma=soma+pA;
        pA=pA+r
        
    }
    console.log('soma dos ELEMENTOS da PA',soma)
}

const progressaoGeometrica=({a1, n, r})=>{
    console.log("Progressão Geométrica:")
    let soma=0
    let pG = a1
    for (let i=0;i<n ;i++){
        console.log(pG);
        soma=soma+pG;
        pG=pG*r
        
    }
    console.log('soma dos ELEMENTOS da PG',soma)
}

progressaoAritmetica(objeto);
progressaoGeometrica(objeto);