function formataData(data){
    const ano = zero(data.getFullYear());
    const mes = zero(data.getMonth());
    const dia = zero(data.getDate());
    const hora = zero(data.getHours());
    const minutos = zero(data.getMinutes());
    const segundos = zero(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

function zero(num){
   if (num >= 10){
       return num;
   }
   else{
       return `0${num}`
   }
}

const data = new Date();
const dataAgora = formataData(data);
console.log(dataAgora)