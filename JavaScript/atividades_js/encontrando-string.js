const filme = {
titulo : 'vingadores',
ano: 2018,
dirtor: 'robin',
personagem: 'miranha'
}

exibirPropriedades(film);
function exibirPropriedades(obj){
    for ( prop in obj)
      if(typeof obj[prop]==='string')
         console.log(prop,obj,[prop])
}