let paises = ["Chile", "Colombia", "Perú", "Francia", "Inglaterra"];

function agregarPaises(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises(){
    console.log(paises);
}

agregarPaises("Ecuador", mostrarPaises);