function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //o valor
        writable: false, //se pode alterar o valor
        configurable: true //se é reconfiguŕavel
    })
}

const camisa = new Produto('Camisa', 60, 3);
console.log(camisa);