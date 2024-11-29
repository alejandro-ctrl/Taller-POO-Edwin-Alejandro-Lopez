import Animal from "./Animal.js";

class Tigre extends Animal {
    rugir() {
        console.log(`${this.nombre}  ruge como tigre.`);
    }
}

export default Tigre;
