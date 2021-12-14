/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe 
contrataram para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salario = 800;

let aumentoPercentual;

let valorAumento;

let novoSalario;

if (salario <= 280){
    aumentoPercentual = '20%';
    valorAumento = salario * (20/100);
    novoSalario = salario + valorAumento;
}

if (salario > 280 && salario <=700){
    aumentoPercentual = '15%';
    valorAumento = salario * (15/100);
    novoSalario = salario + valorAumento;
}

if (salario > 700 && salario <= 1500){
    aumentoPercentual = '10%';
    valorAumento = salario * (10/100);
    novoSalario = salario + valorAumento;
}

if (salario > 1500){
    aumentoPercentual = '5%';
    valorAumento = salario * (5/100);
    novoSalario = salario + valorAumento;
}

console.log(`O salário antes do reajuste é; R$ ${salario}
O percentual do aumento aplicado é de: ${aumentoPercentual}
O valor do aumento é de: R$ ${valorAumento}
O novo salário após o reajuste é de: R$ ${novoSalario}`)