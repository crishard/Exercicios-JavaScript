const data = new Date('2019-03-07 05:55:00');

let diaSemana = data.getDay()

let diaTexto;

switch(diaSemana){
    case 0:
        diaTexto = 'domingo';
        break;
    case 1:
        diaTexto = 'segunda';
        break;
    case 2:
        diaTexto = 'terça';
        break;
    case 3:
        diaTexto= 'quarta';
        break;
    case 4:
        diaTexto = 'quinta';
        break;
    case 5:
        diaTexto = 'sexta';
        break;
    case 6:
        diaTexto = 'sábado';
        break;
    default:
        diaTexto = ' ';
}

console.log(diaSemana, diaTexto)