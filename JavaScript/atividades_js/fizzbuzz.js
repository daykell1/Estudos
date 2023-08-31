const resultado = fizzbuzz(20);
console.log(resultado);

function fizzbuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'n~so é um numero';
    if (entrada % 3 === 0)
        return 'FizzBuzz';
    if (entrada % 5 ===0);
       return ' Buzz';
    if ( entrada % 3===0 && entrada % 5===0)
       return ' fizzBuzz';
    return entrada;
}