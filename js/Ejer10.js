class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      console.log(
        `Avión ${avion.nombre} agregado al aeropuerto ${this.nombreAeropuerto}`
      );
    }
  
    buscarAvion(nombreAvion) {
      const avion = this.listaAviones.find(
        (avion) => avion.nombre === nombreAvion
      );
      if (avion) {
        console.log(
          `Avión ${avion.nombre}: capacidad ${avion.capacidad}, destino ${avion.destino}, pasajeros ${avion.listaPasajeros}`
        );
      } else {
        console.log(
          `El avión ${nombreAvion} no se encuentra en el aeropuerto ${this.nombreAeropuerto}`
        );
      }
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`Pasajero ${pasajero} abordó el avión ${this.nombre}`);
      } else {
        console.log(`El avión ${this.nombre} no tiene cupo.`);
      }
    }
  }
  
  // Crear el objeto de tipo Aeropuerto
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  // Crear 3 objetos de tipo Avion
  const avion1 = new Avion("Avión 1", 100, "Miami");
  const avion2 = new Avion("Avión 2", 200, "Dortmund");
  const avion3 = new Avion("Avión 3", 150, "Londres");
  
  // Agregar los aviones al aeropuerto
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  // Buscar el avión "Avión 2" y abordar un pasajero
  aeropuertoInternacional.buscarAvion("Avión 2");
  avion2.abordar("Marcelo Gallardo");