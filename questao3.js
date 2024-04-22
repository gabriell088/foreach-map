/*
Crie um algoritmo usando o método forEach() para encontrar o maior número em um array de números
*/
const arrayDeNumeros = [10, 5, 7, 22, 14, 3];

let maiorNumero = arrayDeNumeros[0];

arrayDeNumeros.forEach(numero => {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
});

console.log("O maior número é:", maiorNumero)
