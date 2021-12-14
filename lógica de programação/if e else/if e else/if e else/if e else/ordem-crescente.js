// Faça um script que leia três números e mostre-os em ordem decrescente.

const num1 = 50;
const num2 = 24;
const num3 = 40;

if (num1 > num2 && num1>num3 && num2>num3) {
    console.log(num1, num2, num3)
}
if (num1 > num2 && num1>num3 && num3>num2) {
    console.log(num1, num3, num2)
}
if (num2 > num1 && num2>num3 && num1>num3) {
    console.log(num2, num1, num3)
}
if (num2 > num1 && num2>num3 && num3>num1) {
    console.log(num2, num3, num1)
}
if (num3 > num1 && num3>num2 && num1>num2) {
    console.log(num3, num1, num2)
}
if (num3 > num1 && num3>num2 && nu2>num1) {
    console.log(num3, num2, num1)
}