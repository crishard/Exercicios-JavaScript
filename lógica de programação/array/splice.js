const nomes = ['Joao', 'José', 'Fernanda', 'Marinalva', 'Maria'];

//nomes.splice(indice, delete, adicionar, adicionar ...)

//como metodo pop
nomes.splice(-1, 1);

//como metodo shift
nomes.splice(0, 1);


//como metodo push
nomes.splice(nomes.length, 0, 'Maneiro');

//como unshift
nomes.splice(0, 0, 'djonga');

//para remover de uma posição até o final
nomes.splice(-2, Number.MAX_VALUE);

//adicionar elemento na posição desejada
nomes.splice(3, 0, 'Raimundo');


//removendo um elemento e adicionando outro no lugar
nomes.splice(2, 1, 'Marina');

console.log(nomes);