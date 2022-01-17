function criaCalculadora() {
    return {
        resultado: document.querySelector('.resultado'),

        inicia() {
            this.cliquesBotoes();
            this.usaEnter();
        },

        usaEnter() {
            this.resultado.addEventListener('keyup', event =>{
                if (event.keyCode === 13){
                    this.calcula();
                }
            });
        },

        limpaResultado(){
            this.resultado.value = " ";
        },

        apagaUltimo (){
            this.resultado.value = this.resultado.value.slice(0, -1);
        },
  
        calcula (){
            let total = this.resultado.value;

            try {
                total = eval(total);

                if(!total){
                    return alert("Conta inválida");
                }

                this.resultado.value = total;
            } catch(e){
                return alert("Conta inválida")
            }
        },

        cliquesBotoes (){
            document.addEventListener('click', event => {
                const element = event.target;

                if(element.classList.contains('botao')){
                    this.botaoResul(element.innerText); 
                }

                if(element.classList.contains('clear')){
                    this.limpaResultado();
                }

                if(element.classList.contains('apagar')){
                    this.apagaUltimo();
                }

                if(element.classList.contains('igual')){
                    this.calcula();
                }
            });
        },
        botaoResul(valor){
            this.resultado.value += valor;
        },
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();