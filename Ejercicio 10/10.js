class Mascota{
    constructor(nombre,tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    describirMascota(){
        return `Nombre: ${this.nombre},  Tipo: ${this.tipo}`
    }
  }
  class Perro extends Mascota{
    constructor(nombre){
        super(nombre,'Perro');
    }
    ladrar(){
        return `El perro hace Guauu`;
    }
  }
  
  class Gato extends Mascota{
    constructor(nombre){
        super(nombre,'Gato');
    }
    maullar(){
        return `${this.nombre} hace miauuu`
    }
  }
  
  let Mascotas=[];
  
  function agregarMascota() {
    const nombreMascota = document.getElementById("nombreMascota").value;
    const tipoMascota  = document.getElementById("tipoMascota").value;
  
    let mascotica;
  
    if (tipoMascota  === 'Perro') {
        mascotica = new Perro(nombreMascota);
    } else if (tipoMascota  === 'Gato') {
        mascotica = new Gato(nombreMascota);
    }
  
    if (mascotica) {
        Mascotas.push(mascotica);
        listarMascotas();
      }
    }
    function listarMascotas(){
        const listar=document.getElementById('listaMascotas');
        listar.innerHTML="";
    
        Mascotas.forEach(mascoticas=>{
            let Animal;
            if(mascoticas instanceof Perro){
                Animal=mascoticas.ladrar();
            }else if(mascoticas instanceof Gato){
                Animal=mascoticas.maullar();
            }
            const lisItem1=document.createElement('li');
            lisItem1.textContent=`${mascoticas.describirMascota()}, ${Animal}`
            listar.appendChild(lisItem1)
         });
    }