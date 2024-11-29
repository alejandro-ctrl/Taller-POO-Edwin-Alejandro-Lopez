class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
    mostrarLibro() {
      return `Libro: ${this.titulo}, Autor: ${this.autor}`;
    }
  }
  
  class LibroDigital extends Libro {
    constructor(titulo, autor, formato) {
      super(titulo, autor);
      this.formato = formato;
    }
    mostrarLibro() {
      return `Libro: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`;
    }
  }
  
  class LibroFisico extends Libro {
    constructor(titulo, autor, paginas) {
      super(titulo, autor);
      this.paginas = paginas;
    }
    mostrarLibro() {
      return `Libro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`;
    }
  }
  
  let AlmacenarLibros = [];
  
  function agregarLibro() {
    const nombre = document.getElementById("nombreTitulo").value;
    const autor = document.getElementById("autor").value;
    const tipo = document.getElementById("tipo").value.toLowerCase();
  
    let librito;
  
    if (tipo === "digital") {
      const formato = document.getElementById("formato").value;
      librito = new LibroDigital(nombre, autor, formato);
    } else if (tipo === "fisico") {
      const paginas = document.getElementById("paginas").value;
      librito = new LibroFisico(nombre, autor, paginas);
    }
  
    if (librito) {
      AlmacenarLibros.push(librito);
      document.getElementById(
        "listadoLibros"
      ).innerHTML = `${librito.mostrarLibro()}, ha sido agregado.`;
      limpiarFormulario();
    }
  }
  
  function listarLibros() {
    const listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML = "";
  
    AlmacenarLibros.forEach((librito) => {
      const li = document.createElement("li");
      li.textContent = librito.mostrarLibro();
      listaLibros.appendChild(li);
    });
  }
  
  function listarLibrosPorAutor() {
    const BusquedaPorAutor = document.getElementById("BusquedaPorAutor").value;
    const listaLibrosPorAutor = document.getElementById("listaLibrosPorAutor");
    listaLibrosPorAutor.innerHTML = "";
  
    let librosEncontrados = false;
  
    AlmacenarLibros.forEach((libro) => {
      if (libro.autor.toLowerCase() === BusquedaPorAutor.toLowerCase()) {
        const li = document.createElement("li");
        li.textContent = libro.mostrarLibro();
        listaLibrosPorAutor.appendChild(li);
        librosEncontrados = true;
      }
    });
  }
  
  function limpiarFormulario() {
    document.getElementById("formularioLibro").reset();
    document.getElementById("campoDigital").style.display = "none";
    document.getElementById("campoFisico").style.display = "none";
  }
  
  function mostrarCampos() {
    const tipo = document.getElementById("tipo").value;
    if (tipo === "digital") {
      document.getElementById("campoDigital").style.display = "block";
      document.getElementById("campoFisico").style.display = "none";
    } else if (tipo === "fisico") {
      document.getElementById("campoDigital").style.display = "none";
      document.getElementById("campoFisico").style.display = "block";
    } else {
      document.getElementById("campoDigital").style.display = "none";
      document.getElementById("campoFisico").style.display = "none";
    }
  }