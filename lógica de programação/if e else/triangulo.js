/**Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem 
 * ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles 
 * ou escaleno.
    Dicas:
    Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
    Triângulo Equilátero: três lados iguais;
    Triângulo Isósceles: quaisquer dois lados iguais;
    Triângulo Escaleno: três lados diferentes;
*/

const lado1 = '6';
const lado2 = '6';
const lado3 = '6';

if(lado1 + lado2 > lado2 || lado2 + lado3 > lado1 || lado1 + lado3 > lado2){
    
    if (lado1 == lado2 && lado1 == lado3){
        console.log('Triângulo Equilátero');
    }
    else if(lado3 == lado2 || lado2 == lado1 || lado1 == lado3){
        console.log('Triângulo Inósceles');
    }
    else if(lado3 != lado2 && lado2 != lado1 && lado1 != lado3){
        console.log('Triângulo Escaleno');
    }
}
else{
    console.log('Os valores não formam um triângulo')
}