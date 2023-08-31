verificaVelocidade(130);

function  verificaVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if ( velocidade <= velocidadeMaxima)
       consolee.log('ok');

    else{
        const Pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));

        if(pontos >=12)
        console.log('carteira Surpresa');

        else
         console.log('pontos'.posntos);

    }
}