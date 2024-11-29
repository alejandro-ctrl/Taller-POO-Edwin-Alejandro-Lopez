import Empleado from './Empleado.js';

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, horasTrabajadas, sueldoPorHora) {
        super(nombre, horasTrabajadas, sueldoPorHora);
    }
}

export default EmpleadoTiempoCompleto;
