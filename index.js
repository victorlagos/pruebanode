console.log("Hola mundo 123!!!");

const persona = {
    nombre: "Victor",
    apellido: "Lagos",
    nombreCompleto(){
        return this.nombre +' '+this.apellido;
    }
}
   
console.log(persona.nombreCompleto());