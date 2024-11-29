import Estudiante from "./Estudiantes.js";

const estudiante1 = new Estudiante('Alejandro', 20);
estudiante1.agregarCalificacion(4);
estudiante1.agregarCalificacion(5);
estudiante1.saludar();
console.log(estudiante1.calcularPromedio());
