const numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[1]);
console.log(numeros.length);

for(let index = 0; index < numeros.length; index++){
    console.log("For i: " + numeros[index]);
} //mas eficiente en ejecución

numeros.push(200);
numeros.unshift(300);
numeros.pop();
console.log(numeros);

for(const i of numeros ){
console.log("For of: " + i);
}

numeros.forEach(element => {
    console.log("Foreach: " + element);
});

const numerosNuevos = numeros.map(function(el)
{
    return el * 2;
})
console.log(numerosNuevos);

const numerosMayores = numeros.filter(el => el > 4)
console.log("Mayor a 4: " + numerosMayores);

const sumaNumeros = numeros.reduce((total, el)=> total + el, 0)
console.log("Suma: " + sumaNumeros);