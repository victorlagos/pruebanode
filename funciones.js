function sumar(numero1, numero2){
    return numero1 + numero2;
}
console.log("Resultado: " + sumar(4, 6));

const resta = function(numero1, numero2){
    return numero1 - numero2;
}
console.log("Resta: " + resta(15, 4));

const multiplicar = (numero1, numero2)=>{
    return numero1 * numero2;
}
console.log("Multiplicar: " + multiplicar(15, 9));

const saludo = (nombre)=> `Saludos ${nombre}`;
console.log(saludo("Victor"));