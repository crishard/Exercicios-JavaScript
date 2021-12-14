function formataData(data){
    const ano = data.getFullYear();
    const mes = data.getMonth();
    const dia = data.getDate();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

function zero(num){
    return num => 10 ? num : 0`${num}`;
}

const data = new Date();
const dataAgora = formataData(data);
console.log(dataAgora)