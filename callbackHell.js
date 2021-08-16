let paises = ["Colombia", "Perú", "Francia"];

function agregarPaises(pais, callback){
   
    paises.push(pais);
    console.log(`Agregando : ${pais}`);
    callback();

}

function mostrarPaises(){
    console.log(paises);
}

function iniciarIngresoPaises(){
    setTimeout(() => {
        agregarPaises("Chile", mostrarPaises);
        setTimeout(() => {
           agregarPaises("Argentina", mostrarPaises); 
           setTimeout(() => {
            agregarPaises("Mexico", mostrarPaises); 
           }, 3000);
        }, 3000);
    }, 3000);
}

iniciarIngresoPaises();