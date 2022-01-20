//spred -> copia os atributos de um objeto para outro
const pessoa = {nome: 'Crislan', sobrenome:'Torres'};

const outraPessoa = {...pessoa, idade: 32};
outraPessoa.nome = 'Antonio';
outraPessoa.sobrenome = 'Conceicao';
console.log(pessoa);
console.log(outraPessoa)

//assign -> outra forma de copiar um obejto
const pessoa = {nome: 'Crislan', sobrenome:'Torres'};
const outraPessoa = Object.assign({}, pessoa, {peso: 80});
console.log(pessoa);
console.log(outraPessoa);

//getOwnPropetyDescriptor -> mostra as propriedades de um atributo do objeto
const pessoa = {nome: 'Crislan', sobrenome:'Torres'};
console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'));

//values -> retorna os valores da chaves
const pessoa = {nome: 'Crislan', sobrenome:'Torres'};
console.log(Object.values(pessoa));

//entries -> retona a chave e o valor em um array
const pessoa = {nome: 'Crislan', sobrenome:'Torres'};
console.log(Object.entries(pessoa));
//entries usando for
const pessoa = {nome: 'Crislan', sobrenome:'Torres'};
for(let [chave, valor] of Object.entries(pessoa)){
    console.log(chave, valor);
} 