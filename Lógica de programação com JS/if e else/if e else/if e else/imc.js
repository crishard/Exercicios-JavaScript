const peso = 80;
const altura = 1.77;

let nivel;
let imc;

imc = peso / (altura ** 2);
//verificar se a pessoa está no peso ideal
const nivelImc = ['abaixo do peso', 'peso ideal', 'sobre peso']

if (imc <= 18.5){
    nivel = nivelImc[0];
}
if (imc <= 24.9 && imc > 18.5){
    nivel = nivelImc[1];
}
if (imc > 24.9){
    nivel = nivelImc[2];
}

console.log(`O seu IMC é: ${imc} você esta ${nivel}`)