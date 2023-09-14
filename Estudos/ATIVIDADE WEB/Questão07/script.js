document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("inputNumeros");
    const calcularButton = document.getElementById("calcularButton");
    const resultadoSomaElement = document.getElementById("resultadoSoma");

    calcularButton.addEventListener("click", function() {
        const numerosString = inputElement.value;

        // Dividir a string de números em um array
        const numerosArray = numerosString.split(",").map(numero => parseInt(numero.trim()));

        // Filtrar os números ímpares que são múltiplos de três
        const numerosFiltrados = numerosArray.filter(numero => numero % 2 !== 0 && numero % 3 === 0);

        // Calcular a soma dos números filtrados
        const soma = numerosFiltrados.reduce((acc, numero) => acc + numero, 0);

        // Exibir o resultado da soma
        resultadoSomaElement.textContent = soma;
    });
});
