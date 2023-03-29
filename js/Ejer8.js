class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
    saludar() {
      document.write(
        `<p>Hola! Me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}</p>`
      );
    }
    despedirse() {
      document.write("Chau.<br>");
    }
  }
  
  const persona1 = new Persona("Gabriel", 22, "Deportista");
  const persona2 = new Persona("Hector", 44, "Ingeniero");
  
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();