/*
Crie um algoritmo usando o método map() para criar um novo 
array com o dobro de cada número ímpar em um array original
*/
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const dobrarNumeroImpar = (numero) => {

    if (numero % 2 !== 0) {
        return numero * 2;
    } else {
        return numero;
    }
};

const novoArray = arrayOriginal.map(dobrarNumeroImpar);

console.log(novoArray)
