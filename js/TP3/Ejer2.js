let ciudades = [];

while (true) {
  let ciudad = prompt("Ingrese el nombre de una ciudad:");

  if (ciudad === null) {
    break;
  }

  ciudades.push(ciudad);
}

document.write("Longitud del arreglo: " + ciudades.length + "<br>");
document.write(
  "Ciudades en las posiciones 1, 3 y última: " +
    ciudades[0] +
    ", " +
    ciudades[2] +
    ", " +
    ciudades[ciudades.length - 1] +
    "<br>"
);

ciudades.push("París");

document.write("Ciudad en la segunda posición: " + ciudades[1] + "<br>");

ciudades[1] = "Barcelona";

document.write("Arreglo final: " + ciudades);
