document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("inputNumeros");
    const inverterButton = document.getElementById("inverterButton");
    const listaInvertidaElement = document.getElementById("listaInvertida");

    inverterButton.addEventListener("click", function() {
        const numerosString = inputElement.value;

        // Dividir a string de números em um array
        const numerosArray = numerosString.split(",").map(numero => numero.trim());

        // Inverter a ordem dos números no array
        const listaInvertida = numerosArray.reverse();

        // Exibir a lista invertida
        listaInvertidaElement.textContent = "[" + listaInvertida.join(", ") + "]";
    });
});
