let paises = [];

//2 parametros parentesis
const agregarPais = pais => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(pais=="Canada"){
            reject(`El país no es Latinoamericano: ${pais}`);
        }
        paises.push(pais);
        resolve(`Agregado: ${pais}`);
    }, 3000);
});

//Soluciona el callbackHell
agregarPais("Chile")
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return agregarPais("Argentina");
    }).then(resultado =>{
        console.log(resultado);
        console.log(paises);
        return agregarPais("Colombia");
    }).then(resultado =>{
        console.log(resultado);
        console.log(paises);
        return agregarPais("Canada");
    }).then(resultado =>{
        console.log(resultado);
        console.log(paises);
    }).catch(error=>{
        console.log(error);
    })
