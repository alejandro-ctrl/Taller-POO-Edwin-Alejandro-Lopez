import Animal from './Animal.js';

class Elefante extends Animal {
    trompetear() {
        console.log(`${this.nombre}  trompetea como un elefante.`);
    }
}

export default Elefante;