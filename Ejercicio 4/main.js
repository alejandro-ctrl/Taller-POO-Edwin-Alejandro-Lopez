import EmpleadoTiempoCompleto from './EmpleadoTiempoCompleto.js';
import EmpleadoMedioTiempo from './EmpleadoMedioTiempo.js';

const empleados = [];

const employeeForm = document.getElementById('employee-form');
const listaEmpleados = document.getElementById('lista-empleados');


function agregarEmpleado(event) {
    event.preventDefault();

   
    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const horasTrabajadas = parseFloat(document.getElementById('horas').value);
    const sueldoPorHora = parseFloat(document.getElementById('sueldo').value);

    let empleado;

    if (tipo === 'tiempoCompleto') {
        empleado = new EmpleadoTiempoCompleto(nombre, horasTrabajadas, sueldoPorHora);
    } else if (tipo === 'medioTiempo') {
        empleado = new EmpleadoMedioTiempo(nombre, horasTrabajadas, sueldoPorHora);
    }

    empleados.push(empleado);

  
    mostrarListaEmpleados();

 
    employeeForm.reset();
}

function mostrarListaEmpleados() {
  
    listaEmpleados.innerHTML = '';

    empleados.forEach(empleado => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee');

       
        const sueldoFormateado = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
        }).format(empleado.calcularSueldo());

        employeeDiv.textContent = `Empleado: ${empleado.nombre}, Sueldo Total: ${sueldoFormateado}`;
        listaEmpleados.appendChild(employeeDiv);
    });
}

employeeForm.addEventListener('submit', agregarEmpleado);
