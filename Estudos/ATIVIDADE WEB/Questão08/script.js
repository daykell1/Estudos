document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("inputNumeros");
    const calcularButton = document.getElementById("calcularButton");
    const resultadoFatorialElement = document.getElementById("resultadoFatorial");

    calcularButton.addEventListener("click", function() {
        const numerosString = inputElement.value;

        // Dividir a string de números em um array
        const numerosArray = numerosString.split(",").map(numero => parseInt(numero.trim()));

        // Calcular o fatorial de cada número e armazenar em um array
        const fatoriais = numerosArray.map(numero => calcularFatorial(numero));

        // Exibir o resultado dos fatoriais
        resultadoFatorialElement.textContent = "Fatoriais: " + fatoriais.join(", ");
    });

    function calcularFatorial(numero) {
        if (numero < 0) {
            return "N/A (Número negativo)";
        }
        if (numero === 0 || numero === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
});
