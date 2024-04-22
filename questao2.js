/*
Crie um algoritmo usando o método map() para converter um 
array de strings para um array de números
*/
const arrayDeStrings = ["1", "2", "3", "4", "5"];

const converterParaNumero = (string) => Number(string);

const arrayDeNumeros = arrayDeStrings.map(converterParaNumero);

console.log(arrayDeNumeros)
