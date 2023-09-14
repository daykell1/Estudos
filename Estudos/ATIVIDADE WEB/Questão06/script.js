const inputElement = document.getElementById("inputNumeros");
    const ordenarButton = document.getElementById("ordenarButton");
    const numerosOrdenadosElement = document.getElementById("numerosOrdenados");

    ordenarButton.addEventListener("click", function() {
        const numerosString = inputElement.value;
        
        // Dividir a string de números em um array
        const numerosArray = numerosString.split(",").map(numero => parseInt(numero.trim()));
let teste=true;
        for (let i=0;i<numerosArray.length;i++){
            if(isNaN(numerosArray[i])){
            teste=false;
            }
        }
        if(teste){
            document.getElementById("mensagemErro").textContent="";
        }else{
            document.getElementById("mensagemErro").textContent="Algo não numérico foi inserido, atenção...";
        }
        // Remover valores não numéricos
        const numerosValidos = numerosArray.filter(numero => !isNaN(numero));

        // Ordenar os números em ordem crescente
        numerosValidos.sort((a, b) => a - b);

        // Exibir os números ordenados
        numerosOrdenadosElement.textContent = numerosValidos.join(", ");
    });