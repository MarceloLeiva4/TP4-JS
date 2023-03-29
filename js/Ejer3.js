class Rectangulo {
    constructor(altura = 0, ancho = 0) {
      this.altura = altura;
      this.ancho = ancho;
    }
    set cambioAncho(valor) {
      this.ancho = valor;
    }
    set cambioAltura(valor) {
      this.altura = valor;
    }
    get area() {
      return this.altura * this.ancho;
    }
    get perimetro() {
      return this.altura * 2 + this.ancho * 2;
    }
  }
  let ingresarAltura = parseInt(prompt("ingrese la altura del rectangulo."));
  
  let ingresarAncho = parseInt(prompt("Ingrese el ancho del rectangulo."));
  
  let obj_rectangulo = new Rectangulo(altura=ingresarAltura, ancho=ingresarAncho);