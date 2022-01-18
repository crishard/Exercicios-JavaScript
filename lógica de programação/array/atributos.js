const nomes = ['Maria', 'Francisca', "ronalda"];

//remove o ultimo
nomes.pop();

//adiciona elemento no final do array
nomes.push('marilda');

//adiciona elemento no começo do array
nomes.unshift('josi');

//tamanho do array
console.log(nomes.length);

//fatiar array
const parte = nomes.slice(1, 3); 

//converter string em array
const nome = 'Antonio Crislan da Conceição Torres';

const nomeArray = nome.split(' ');
console.log(nomeArray);

//converter array em string 
const nome = ['Antonio', 'Crislan', 'Torres'];
const nomeN = nome.join(' ');
console.log(nomeN);