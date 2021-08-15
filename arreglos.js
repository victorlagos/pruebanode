const numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[1]);
console.log(numeros.length);

for(let index = 0; index < numeros.length; index++){
    console.log(numeros[index]);
}

numeros.push(200);
numeros.unshift(300);
numeros.pop();
console.log(numeros);

