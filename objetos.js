const producto = {
    nombre: "Monitor Gamer 34",
    precio: 300000,
    información: {
        peso: "1kb",
        medidas: "50cms"
    },
    disponibilidad: ["Los Ángeles, Chillán, Concepción"]
}

const bodega = {
    nombreBodega: "Los Ángeles",
    stockBodega: 450
}

const datosObjetos = {...producto, ...bodega};
console.log(datosObjetos);

console.log(Object.keys(bodega));
console.log(Object.values(bodega));
console.log(Object.entries(bodega));

//Object.freeze(producto);
//Object.seal(producto);
//producto.nombre = "Computador";
//producto.stock = 60;

//let nombre1 = producto.nombre;
//console.log(producto.información.medidas);
//console.log(producto.disponibilidad[0]);

//function imprimir({nombre = "", precio = 0, stock = 0}){
    //console.log(`Nombre: ${nombre} precio:$ ${precio} stock: ${stock}`)
//}

//imprimir(producto);

//const { nombre, precio, información:{ peso } } = producto;
//console.log(peso)
