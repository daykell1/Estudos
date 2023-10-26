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
  
  const exemplo = async () => {
    try {
      const result1 = await upperCaseAfter500ms('dayane e elannio');
      const result2 = await reverseLetters(result1);
      console.log(result2);
    } catch (error) {
      console.error(error);
    }
  };
  
  exemplo();