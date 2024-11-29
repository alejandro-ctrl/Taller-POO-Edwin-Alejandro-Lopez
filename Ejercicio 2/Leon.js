import Animal from './Animal.js'

class Leon extends Animal {
    rugir() {
        console.log(`${this.nombre} ruge como un león.`);
    }
}

export default Leon;
