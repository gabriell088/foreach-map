/*
Crie um algoritmo usando o método forEach() para encontrar a soma de todos os números em um array
*/
const arrayDeNumeros = [10, 5, 7, 22, 14, 3];

let soma = 0;

arrayDeNumeros.forEach(numero => {
    soma += numero;
});

console.log("A soma de todos os números é:", soma)
