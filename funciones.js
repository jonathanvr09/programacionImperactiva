const prompt = require("prompt-sync")({ sigint: true });

function saludar (persona){
    return `hola ${persona}, tanto tiempo sin verte`
 }

 let nombre = prompt("hola dime tu nombre ")

 console.log(saludar (nombre))


// Micro desafio 1
