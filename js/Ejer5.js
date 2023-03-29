class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anionaci) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      if (sexo === "H" || sexo === "M") {
        this.sexo = sexo;
      } else {
        throw new Error("El sexo debe ser H para hombre o M para mujer.");
      }
      this.peso = peso;
      this.altura = altura;
      this.anionaci = anionaci;
    }
  
    get mostrarGeneracion() {
      if (this.anionaci >= 1930 && this.anionaci <= 1948) {
        return "Generación Silenciosa, los niños de la postguerra. Rasgo característico: Austeridad";
      } else if (this.anionaci >= 1949 && this.anionaci <= 1968) {
        return "Baby Boomers. Rasgo característico: Ambición";
      } else if (this.anionaci >= 1969 && this.anionaci <= 1980) {
        return "Generación X. Rasgo característico: Obsesión y Éxito";
      } else if (this.anionaci >= 1981 && this.anionaci <= 1993) {
        return "Generación Y: Millennials. Rasgo característico: Frustración.";
      } else if (this.anionaci>= 1994 && this.anionaci <= 2010) {
        return "Generación Z. Rasgo característico: Irreverencia.";
      } else {
        return "No se pudo determinar la generación.";
      }
    }
  
    get esMayorDeEdad() {
      if (this.edad >= 18) {
        return true;
      } else {
        return false;
      }
    }
  
    get mostrarDatos() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Año de nacimiento: ${this.anionaci}`;
    }
  
    static generarDni() {
      let dni = "";
  
      for (let i = 0; i < 9; i++) {
        let num_aleatorio = Math.floor(Math.random() * 8) + 1;
        dni = dni + num_aleatorio.toString();
      }
  
      return dni;
    }
  }
  
  const persona1 = new Persona("Marcelo", 25, Persona.generarDni(), "H", 75, 1.81, 1998);
  document.write(persona1.mostrarDatos);
  document.write(persona1.mostrarGeneracion);
  document.write(persona1.esMayorDeEdad, "<br>");
  
  const persona2 = new Persona("Sofia", 21, Persona.generarDni(), "M", 60, 1.65, 2002);
  document.write(persona2.mostrarDatos);
  document.write(persona2.mostrarGeneracion);
  document.write(persona2.esMayorDeEdad, "<br>");
  
  const dniAleatorio = Persona.generarDni();