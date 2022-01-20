function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeComplet = () => nome+ ' ' + sobrenome;

const p1 = new Pessoa('Crislan', 'Torres');
const p2 = new Pessoa('Antonio', 'Conceiçaõ');
console.log(p1, p2);