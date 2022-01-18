///filter sempre retorna um array com a mesma quantidade de elementos ou menos
const numeros = [11, 22, 32, 14, 6, 9, 26, 49, 65];

//retorna os valores maiores que 10 do array

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


//retornar pessoas com mais de 40 anos de idade 
//pessoas com o nome com 5 letras ou mais
//nomes que terminam com a
const pessoas = [
    {nome: 'Jose', idade: 22},
    {nome: 'Francisco', idade: 19},
    {nome: 'Maria', idade: 42},
    {nome: 'Marilia', idade: 25},
    {nome: 'Eduarda', idade: 48},
    {nome: 'Fran', idade: 33}
]

const comNomeGrande = pessoas.filter(valor => valor.nome.length > 5);
console.log(comNomeGrande);

const comMaisDeTrinta = pessoas.filter(valor => valor.idade> 40);
console.log(comMaisDeTrinta);

const comFinalA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(comFinalA);