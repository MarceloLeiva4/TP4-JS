let ladoA = prompt("Ingrese el valor del lado A del rectángulo:");
let ladoB = prompt("Ingrese el valor del lado B del rectángulo:");

ladoA = Number(ladoA);
ladoB = Number(ladoB);

function calcularPeriRect(a, b) {
  return 2 * (a + b);
}

let perimetro = calcularPeriRect(ladoA, ladoB);

document.write(`El perímetro del rectángulo es: ${perimetro}`);
