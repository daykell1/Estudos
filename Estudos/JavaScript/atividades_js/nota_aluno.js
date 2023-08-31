const array=[70,70,80];

console.log(media(array));

function media(notas){

    if ( media < 59) return 'F';
    if ( media < 59) return 'D';
    if ( media < 59) return 'C';
    if ( media < 59) return 'B';
    return 'A';
}
function calcularMedia(array){
    let soma =0;
    for(let valor of array){
        soma += valor;

    }
    return soma/(array.length);
}
