class Transporte {
    constructor(capacidad, tipoCombustible) {
      this.capacidad = capacidad;
      this.tipoCombustible = tipoCombustible;
    }
    mostrarTransporte() {
      return `Capacidad de personas: ${this.capacidad}, Tipo de combustible: ${this.tipoCombustible}`;
    }
  }
  
  class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible) {
      super(capacidad, tipoCombustible);
    }
    arrancar() {
      return `El autobús ha arrancado`;
    }
  }
  
  class Bicicleta extends Transporte {
    constructor(capacidad, tipoCombustible) {
      super(capacidad, "no usa");
    }
    pedalear() {
      return `La bicicleta esta siendo manejada`;
    }
  }
  
  let MedioTransporte = [];
  
  function agregarTransporte() {
    const capacidad = document.getElementById("capacidad").value;
    const tipoTransporte  = document.getElementById("tipoTransporte").value;
    const tipoCombustible = document.getElementById("tipoCombustible").value;
  
    let transporte;
  
    if (tipoTransporte  === 'Autobus') {
        transporte = new Autobus(capacidad, tipoCombustible);
    } else if (tipoTransporte  === 'Bicicleta') {
        transporte = new Bicicleta(capacidad);
    }
  
    if (transporte) {
        MedioTransporte.push(transporte);
        listarTransportes();
      }
    }
  
  
  function listarTransportes(){
    const lista=document.getElementById('listaTransportes');
    lista.innerHTML="";
  
    MedioTransporte.forEach(transporte=>{
        let go;
        if(transporte instanceof Autobus){
            go=transporte.arrancar();
        }else if(transporte instanceof Bicicleta){
            go=transporte.pedalear();
        }
        const lisItem=document.createElement('li');
        lisItem.textContent=`${transporte.mostrarTransporte()}, ${go}`
        lista.appendChild(lisItem)
     });
  }
  document.getElementById("tipoTransporte").addEventListener("change", function() {
    const tipo = this.value;
    const tipoCombustibleContainer = document.getElementById("tipoCombustibleContainer");
  
    if (tipo === "Bicicleta") {
        tipoCombustibleContainer.style.display = "none"; // Esconde el campo de combustible
    } else {
        tipoCombustibleContainer.style.display = "block"; // Muestra el campo de combustible
    }
  });