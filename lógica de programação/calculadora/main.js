function criaCalculadora() {
    return {
        resultado: document.querySelector('.resultado'),

        limpaResultado(){
            this.resultado.value = " ";
        },
  
        inicia() {
            this.cliquesBotoes();
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
            });
        },
        botaoResul(valor){
            this.resultado.value += valor;
        },
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();