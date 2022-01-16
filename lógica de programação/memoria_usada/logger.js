const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");


const emmiter = new EventEmitter();

emmiter.on('log', (mensagem) => {
    fs.appendFile(path.join(__dirname, "logger.txt"), mensagem, err => {
        if(err) throw err;
    });
});

function log(mensagem){
    emmiter.emit("log", mensagem);
}

module.exports = log;