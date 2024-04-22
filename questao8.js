/*
 Crie um algoritmo usando o método forEach() para calcular a média de todos os números em um array?
*/

const arrayDeNumeros = [10, 5, 7, 22, 14, 3];


let soma = 0
let quantidade = 0
arrayDeNumeros.forEach(numero => {
    soma += numero;
    quantidade++;
});

const media = soma / quantidade;

console.log("A média de todos os números é:", media)
