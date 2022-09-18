function Produto(nome, preco, cor){
    this.nome = nome;
    this.preco = preco;
    this.cor = cor;
}

Produto.prototype.desconto = (percent) =>{
    const precoDesconto = (this.preco * (percent/100));
}
Produto.prototype.decremento = (percent) => {
    const novoPreco = this.preco - (this.preco *(percent/1000));
}

function Camisa (nome, preco, cor){
    Produto.call(this, nome, preco, cor);
}

Camisa.prototype.decremento = (percent) =>{
    const precoCamisa = this.preco - (this.preco * (percent*100))
}

Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

const maresia = new Camisa('Maresia', 89.90, 'preta');
Camisa.decremento(10);
console.log(maresia);