const os = require("os");
const log = require("./logger")


setInterval(() => {
    
    const {freemem, totalmem} = os;

    const free = parseInt(freemem() /1024 /1024);
    const total = parseInt(totalmem() /1024 /1024);
    const porcentagem = parseInt((free / total) *100);

    const status = {
        livre: `${free} MB`,
        total: `${total} MB`,
        usada: `${porcentagem} %`
    }

    console.clear();
    console.log("#########   STATUS DO PC ########");
    console.log(status);

    log(`${JSON.stringify(status)} \n`);
}, 3000);