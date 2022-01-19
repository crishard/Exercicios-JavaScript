function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw TypeError({message: 'Estoque só pode conter numeros'});
            }
            estoquePrivado = valor;
        } 
    });
}

const camisa = new Produto('Camisa', 60, 3);
// console.log(camisa);
camisa.estoque = 'adieidj';
console.log(camisa.estoque);