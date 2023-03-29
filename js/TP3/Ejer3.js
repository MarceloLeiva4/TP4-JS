let resultados = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;

  if (!resultados[suma]) {
    resultados[suma] = 1;
  } else {
    resultados[suma]++;
  }
}

for (let i = 2; i <= 12; i++) {
  document.write(
    "Número de apariciones de la suma " +
      i +
      ": " +
      (resultados[i] || 0) +
      "<br>"
  );
}
