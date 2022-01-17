function Pessoa(nome, sobrenome){
    //atributos ou metodos privados
    const id = 25;
    const metodoInterno = function(){};


    //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + " :metodo publico");
    }
}
const pessoa1 = new Pessoa("Crislân", "Torres");
const pessoa2 = new Pessoa("Antonio", "Conceição");

console.log(pessoa1, pessoa2);