class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
    mostrarPrecio(){
        console.log(`El precio es ${this.precio}`)
    }
}

export default Producto;
