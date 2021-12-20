/** Escreva uma função que recebe um numero aleatório e
 * retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número não é divisível por 3 ou 5 = Retorna o próprio número
 * Checar se o número é ralmente um inteiro
 * Use a função com números de 0 a 100
*/

let min = 0;
let max = 100;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function principal(num){
    if(Number.isInteger(num)){
        while(num <=100){
            if(num % 3 == 0 && num % 5 == 0){
                return 'O valor é interio, FizzBuzz';
            } else if(num % 3 == 0){     
                return 'O valor é interio, Fizz';
            } else if (num % 5 ==0){
                return 'O valor é interio, Buzz';
            } else if(num % 3 != 0 && num % 5 != 0){
                return `O valor não é divisível por 3 nem por 5 ${num}`;
            }
        }
    }
}

console.log( getRandomInt(min, max), principal(getRandomInt(min, max)));
