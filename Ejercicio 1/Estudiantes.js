import Persona from './Persona.js';

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }

    calcularPromedio() {
        const suma = this.calificaciones.reduce((a, b) => a + b, 0);
        return this.calificaciones.length ? suma / this.calificaciones.length : 0;
    }
}

export default Estudiante;
