let paises = ['Egipto'];

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

async function iniciarProceso(){
    try{
        let resultado = await agregarPais("Chile");
        console.log(resultado);
        resultado = await agregarPais("Argentina");
        console.log(resultado);
        resultado = await agregarPais("Colombia");
        console.log(resultado);
        resultado = await agregarPais("Mexico");
        console.log(resultado);
        resultado = await agregarPais("Canada");
        console.log(resultado);
        console.log(paises);
    }catch(error){
        console.log(error);
    }
}

iniciarProceso();