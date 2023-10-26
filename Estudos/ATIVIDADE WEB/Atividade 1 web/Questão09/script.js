document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("inputNumeros");
    const calcularButton = document.getElementById("calcularButton");
    const mediaAritmeticaElement = document.getElementById("mediaAritmetica");
    const quantidadePositivosElement = document.getElementById("quantidadePositivos");
    const quantidadeNegativosElement = document.getElementById("quantidadeNegativos");
    const percentualPositivosElement = document.getElementById("percentualPositivos");
    const percentualNegativosElement = document.getElementById("percentualNegativos");

    calcularButton.addEventListener("click", function() {
        const numerosString = inputElement.value;

        // Dividir a string de números em um array
        const numerosArray = numerosString.split(",").map(numero => parseInt(numero.trim()));

        // Calcular a média aritmética
        const soma = numerosArray.reduce((acc, numero) => acc + numero, 0);
        const mediaAritmetica = soma / numerosArray.length;

        // Calcular a quantidade de valores positivos e negativos
        const quantidadePositivos = numerosArray.filter(numero => numero > 0).length;
        const quantidadeNegativos = numerosArray.filter(numero => numero < 0).length;

        // Calcular o percentual de valores positivos e negativos
        const totalNumeros = numerosArray.length;
        const percentualPositivos = (quantidadePositivos / totalNumeros) * 100;
        const percentualNegativos = (quantidadeNegativos / totalNumeros) * 100;

        // Exibir os resultados
        mediaAritmeticaElement.textContent = mediaAritmetica.toFixed(2);
        quantidadePositivosElement.textContent = quantidadePositivos;
        quantidadeNegativosElement.textContent = quantidadeNegativos;
        percentualPositivosElement.textContent = percentualPositivos.toFixed(2);
        percentualNegativosElement.textContent = percentualNegativos.toFixed(2);
    });
});
