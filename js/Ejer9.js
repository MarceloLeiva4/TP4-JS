class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    emitirSonido() {
      console.log("Emite sonido.");
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
    emitirSonido() {
      console.log("¡Guau! ¡Guau!");
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
    emitirSonido() {
      console.log("¡Miau! ¡Miau!");
    }
  }
  
  const perro = new Perro("Goofy", 9);
  const gato = new Gato("Mantecado", 2);
  
  perro.emitirSonido();
  gato.emitirSonido();