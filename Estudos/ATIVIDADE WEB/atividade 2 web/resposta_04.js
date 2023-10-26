/*
04) Escreva duas funções arrow usando a técnica de promises (Javascript ES6). A primeira
função, colocarTodasLetrasEmMaiusculoEm500ms, receberá um único parâmetro e o
colocará em maiúsculo depois de 500 milisegundos. Verifique, dentro da função, se o
parâmetro se trata de um tipo String. Se o parâmetro não for do tipo String, a promise deve
rejeitar o parâmetro. A segunda função, inverteTodasLetras(), realizará uma inversão das
letras da String. Atenção: você deverá utilizar encadeamento de funções.
*/
const upperCaseAfter500ms = (text) => {
    return new Promise((resolve, reject) => {
      if (typeof text === 'string') {
        setTimeout(() => {
          resolve(text.toUpperCase());
        }, 500);
      } else {
        reject('O parâmetro foi rejeitado, não é uma string');
      }
    });
  };
  
  const reverseLetters = (text) => {
    return new Promise((resolve, reject) => {
      if (typeof text === 'string') {
        const reversedText = text.split('').reverse().join('');
        resolve(reversedText);
      } else {
        reject('O parâmetro foi rejeitado, não é uma string');
      }
    });
  };
  
  upperCaseAfter500ms('dayane e elannio')
    .then(reverseLetters)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });