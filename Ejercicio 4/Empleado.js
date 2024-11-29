class Empleado {
    constructor(nombre, horasTrabajadas, sueldoPorHora) {
        this.nombre = nombre;
        this.horasTrabajadas = horasTrabajadas;
        this.sueldoPorHora = sueldoPorHora;
    }

    calcularSueldo() {
        return this.horasTrabajadas * this.sueldoPorHora;
    }
}

export default Empleado;
