class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} , tengo ${this.edad} años y mi calificacion promedio es:`);
    }
}

export default Persona;
