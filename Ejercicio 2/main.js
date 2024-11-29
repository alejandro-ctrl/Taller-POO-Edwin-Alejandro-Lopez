import Leon from './Leon.js';
import Tigre from './Tigre.js';
import Elefante from './Elefante.js';

const animales = [
    new Leon('Scar', 'León'),
    new Tigre('Kratoz', 'Tigre'),
    new Elefante('Dumbo', 'Elefante')
];

animales.forEach(animal => {
    if (animal instanceof Leon) {
        animal.rugir();
    } else if (animal instanceof Tigre) {
        animal.rugir();
    } else if (animal instanceof Elefante) {
        animal.trompetear();
    }
});
