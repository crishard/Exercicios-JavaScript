//retornar a soma do dobro de todos os pares
//filtrar pares
//dobrar valores
//somar tudo (reduce)
// const numeros = [11, 22, 32, 14, 6, 9, 26, 49, 65];

// //retorna os pares
// const filtrados = numeros.filter(valor => valor % 2 === 0);
// //dobra os pares
// const filtradosDobrados = filtrados.map(valor => valor * 2);
// //soma os valores dobrados 
// const total = filtradosDobrados.reduce((acumulador ,valor)=> acumulador+=valor);
// console.log(total);


//outra forma
const numeros = [11, 22, 32, 14, 6, 9, 26, 49, 65];

const total = numeros
    .filter(valor => valor % 2 ===0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor);


console.log(total);