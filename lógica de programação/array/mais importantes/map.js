//map vai retornar um novo array, com os valores alterados, e vvai ter sempre o mesmo tamanho do array original
const numeros = [11, 22, 32, 14, 6, 9, 26, 49, 65];

//dobrar os números
const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);



//retornar uma string com o nome da pessoa
//remover a chave nome do objeto
//adicionar chave id no objeto
const pessoas = [
    {nome: 'Jose', idade: 22},
    {nome: 'Francisco', idade: 19},
    {nome: 'Maria', idade: 42},
    {nome: 'Marilia', idade: 25},
    {nome: 'Eduarda', idade: 48},
    {nome: 'Fran', idade: 33}
]

//retornando somente os nomes
const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);
//retornando somente idades
const idades = pessoas.map(valor => ({idade: valor.idade}));
console.log(idades);
//adicionando id
const comId = pessoas.map((valor, indice) => {
    const novasPessoas = {...valor};
    novasPessoas.id = indice +1;
    return novasPessoas;
});
console.log(comId);