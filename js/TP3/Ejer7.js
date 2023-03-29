let numero = prompt("Ingrese el número para la tabla de multiplicar:");

numero = Number(numero);

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

tablaMultiplicar(numero);
