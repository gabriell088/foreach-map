/*
Crie um algoritmo usando o método forEach() para imprimir 
apenas os elementos pares de um array? 
*/
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayDeNumeros.forEach(numero => {
    if (numero % 2 === 0) {
        console.log(numero);
    }
});
