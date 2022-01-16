function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(2);
const quadriplica = criaMultiplicador(2);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(5));