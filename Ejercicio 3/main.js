import Electrodomestico from "./Electrodomestico.js";
import Producto from "./Producto.js";


const productos = [];

const productForm = document.getElementById("product-form");
const productosBajoStock = document.getElementById("productos-bajo-stock");
const todosLosProductos = document.getElementById("todos-los-productos");


function agregarProducto(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidadEnStock = parseInt(document.getElementById("cantidad").value);
  const marca = document.getElementById("marca").value;

  let producto;

  if (marca) {
    producto = new Electrodomestico(nombre, precio, cantidadEnStock, marca);
  } else {
    producto = new Producto(nombre, precio, cantidadEnStock);
  }

  productos.push(producto);

  mostrarTodosLosProductos();
  mostrarProductosBajoStock();

  productForm.reset();
}


function mostrarTodosLosProductos() {
 
  todosLosProductos.innerHTML = "";

  productos.forEach((producto) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.textContent = `Producto: ${producto.nombre}, Precio: $${
      producto.precio
    }, Cantidad en stock: ${producto.cantidadEnStock} ${
      producto.marca ? `, Marca: ${producto.marca}` : ""
    }`;
    todosLosProductos.appendChild(productDiv);
  });
}


function mostrarProductosBajoStock() {

  productosBajoStock.innerHTML = "";

  productos.forEach((producto) => {
    if (producto.cantidadEnStock < 10) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.textContent = `Producto: ${producto.nombre}, Precio: $${
        producto.precio
      }, Cantidad en stock: ${producto.cantidadEnStock} ${
        producto.marca ? `, Marca: ${producto.marca}` : ""
      }`;
      productosBajoStock.appendChild(productDiv);
    }
  });
}

productForm.addEventListener("submit", agregarProducto);
}clearIntervalc
