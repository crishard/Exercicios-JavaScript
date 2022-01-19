//some todos os numeros (reduce)
// retorne um array com valores pares (filter)
//retone um arrat com o dobro dos valores (map)


//somando os numeros
const numeros = [11, 22, 32, 14, 6, 9, 26, 49, 65];
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
});
console.log(total);

//retornando um array com os valores pares
const numeros = [11, 22, 32, 14, 6, 9, 26, 49, 65];
const total = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]);
console.log(total);

//retornando array com o dobro dos valores
const numeros = [11, 22, 32, 14, 6, 9, 26, 49, 65];
const total = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor *2);
    return acumulador;
},[]);
console.log(total);


//retornar a pessoa mais velha
const pessoas = [
    {nome: 'Jose', idade: 22},
    {nome: 'Francisco', idade: 19},
    {nome: 'Maria', idade: 42},
    {nome: 'Marilia', idade: 25},
    {nome: 'Eduarda', idade: 48},
    {nome: 'Fran', idade: 33}
]

const maisVelha = pessoas.reduce((acumulador, valor) =>(acumulador.idade > valor.idade) ? acumulador:valor);
console.log(maisVelha);