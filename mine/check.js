//validadion solo letras funciona, solo queda hacer que el pabellon sea uno de los posibles y que cree un objeto servicio cuando el form es correcto
//nvm, pabellon just has to be 1,2,3 or 4 (or 0,1,2,3, im not sure)

const pabellones = ["Arrupe", "Areilza", "Aztarain", "Guturbai"];

document.addEventListener("DOMContentLoaded", function () {
  var eventos = function () {
    // Validaciones formulario
    const botonSubmit = document.getElementById("botonSub");

    //const botonDelete = document.getElementById("botonDel");
    /*var tabla = document.getElementById("tabla");
        var lastRow = tabla.lastElementChild; // Obtener la última fila
        if (lastRow) {
            tabla.removeChild(lastRow); // Eliminar la última fila
        }*/

    if (botonSubmit) {
      botonSubmit.addEventListener("click", function (event) {
        const servicio = document.getElementById("servicio");
        const pabellon = document.getElementById("pabellon");
        const mostrar = document.getElementById("mostrar");

        let mostrarBool;

        if (mostrar.value === "si") {
          mostrarBool = true;
        } else {
          mostrarBool = false;
        }

        const soloLetrasEsp = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        const numToHundr = /^(100|[1-9]?[0-9])$/;
        const letrasNumerosOGuion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\- ]+$/;

        let esValido = true;

        if (!(servicio && letrasNumerosOGuion.test(servicio.value))) {
          //document.getElementById("errorNombre").style.visibility = "visible";
          alert("el servicio solo puede contener letras, números y guiones");
          esValido = false;
          event.preventDefault(); // Prevent the default form submission
        } else {
          //document.getElementById("errorNombre").style.visibility = "hidden";
        }

        const pabellonNum = parseInt(pabellon.value, 10);

        if (isNaN(pabellonNum) || pabellonNum < 0 || pabellonNum > 3) {
          alert("Pabellón debe ser un número entre 0 y 3");
          esValido = false;
          event.preventDefault();
        }

        if (esValido) {
          console.log("formulario correcto");

          servicio1 = new Servicio(servicio.value, pabellonNum, mostrarBool);

          arrrayServicios = [servicio1];

          arrrayServicios.forEach(element => {
            console.log(element.muestra());
          });

          event.preventDefault();
        }
      });
    }
  };

  eventos(); // Call the eventos function after the DOM is ready
});









class Servicio {
  #servicio;
  #pabellon;
  #mostrar;

  constructor(servicio, pabellon, mostrar = false) {
    this.#servicio = servicio;
    this.#pabellon = pabellon;
    this.#mostrar = mostrar;
  }

  // getters & setters
  getServicio() {
    return this.#servicio;
  }
  getPabellon() {
    return this.#pabellon;
  }
  getMostrar() {
    return this.#mostrar;
  }

  setServicio(servicio) {
    this.#servicio = servicio;
  }
  setPabellon(pabellon) {
    this.#pabellon = pabellon;
  }
  setMostrar(mostrar) {
    this.#mostrar = mostrar;
  }

  // ingresar(cantidad) {

  // if(cantidad>0){
  //     this.#cantidad = this.#cantidad + cantidad;
  // }else{
  //     alert("no puedes ingresar cantidad negativa");
  // }

  // }

  // retirar(cantidad) {
  //     if((this.#cantidad - cantidad)>0){
  //     this.#cantidad = this.#cantidad - cantidad;
  //     }else{
  //     alert("no puedes retirar esa cantidad");
  //     }
  // }

  muestra() {
    // alert("Titular: "+ this.#titular + "\n Cantidad: " + this.#cantidad);

      let mostrarVis;

     if (this.#mostrar == true) {
          mostrarVis = "visible";
        } else {
          mostrarVis = "no visible";
        }
    
    return this.#servicio + " - " + this.#pabellon + ": " + pabellones[this.#pabellon] + " - " + mostrarVis;
  }
}
