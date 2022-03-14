const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseInt(prompt("Ingrese un numero "));
let numero2 = parseInt(prompt("Ingrese otro numero "));
// let noIdentificado = "No identificado";

let eligeOperacion = prompt( "Que operacion deseas realizar?" ,"1 = suma",'\n', "2 = resta",'\n', "3 = multiplicar",'\n', "4 = dividir");

if (eligeOperacion = 1){
    console.log(numero1 + numero2) 

} else if (eligeOperacion = 2){
    console.log(numero1 - numero2)

} else if (eligeOperacion = 3){
    console.log(numero1 * numero2)
    
} else if (eligeOperacion = 4){
    console.log(numero1/ numero2)

}

