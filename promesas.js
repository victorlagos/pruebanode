let paises = [];

//2 parametros parentesis
const agregarPais = pais => new Promise((resolve, reject) => {
    setTimeout(() => {
        paises.push(pais);
        //reject("Error al ingresar el país");
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
    })
