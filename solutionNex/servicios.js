const pabellones = ['Arrupe', 'Areilza', 'Aztarain', 'Guturbai'];

// window.pabellones = ['Arrupe', 'Areilza', 'Aztarain', 'Guturbai'];

class Servicio {
    constructor(servicio, pabellon, mostrar) {
      this._servicio = servicio;
      this._pabellon = pabellon;
      this._mostrar = mostrar;
    }
  
    // Getters
    get servicio() {
      return this._servicio;
    }
  
    get pabellon() {
      return this._pabellon;
    }
  
    get mostrar() {
      return this._mostrar;
    }
  
    // Setters
    set servicio(valor) {
      this._servicio = valor;
    }
  
    set pabellon(valor) {
      this._pabellon = valor;
    }
  
    set mostrar(valor) {
      this._mostrar = valor;
    }
  
    // Método mostrar
    mostrarInfo() {
      const nombrePabellon = pabellones[this._pabellon] ;
      const visibilidad = this._mostrar ? 'visible' : 'no visible';
      return `${this._servicio} - ${this._pabellon}: ${nombrePabellon} - ${visibilidad}`;
    }

  }