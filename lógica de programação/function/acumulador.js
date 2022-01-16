function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador == "+") acumulador += numero;
        if(operador == "-") acumulador -= numero;
        if(operador == "/") acumulador /= numero;
        if(operador == "*") acumulador *= numero;
    }
    console.log(acumulador);
}
conta("+", 0, 20, 40, 20, 40);