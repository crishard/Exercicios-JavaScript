// const obejtoA = {
//     chave: 'a'
// };
// const obejtoB = {
//     chave: 'b'
// };
// //dando o proto do objeto a, ao objeto b
// Object.setPrototypeOf(obejtoB, obejtoA);
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Object.prototype.desconto = function(perct) {
    this.preco = this.preco - (this.preco * (perct / 100));
};

Object.prototype.total = function(perct){
    this.preco = this.preco + (this.preco * (perct / 100));
};


const camisa = new Produto('camisa', 50);
camisa.desconto(10);
camisa.total(10);
console.log(camisa);