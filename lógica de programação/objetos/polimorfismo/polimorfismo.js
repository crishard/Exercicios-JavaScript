// Banco 
class Conta {
    constructor(agencia, conta, saldo) {
        this.conta = conta;
        this.saldo = saldo;
        this.agencia = agencia;
    }
    deposito(valor) {
        this.saldo += valor;
        this.verSaldo();
    }
    sacar(valor) {
        if (valor > this.saldo)
            return "Saldo insuficiente para saque";

        this.saldo -= valor;
        this.verSaldo();
    }
    verSaldo() {
        console.log('Ag:', this.agencia,
            'Conta: ', this.conta,
            'Saldo: ', this.saldo);
    }
};


const conta01 = new Conta(12, 94739493, 10);

conta01.deposito(10);