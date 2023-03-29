function cuentaCaracteres(cadena) {
  return cadena.length;
}

function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    console.log("La cadena está formada solo por mayúsculas.");
  } else if (cadena === cadena.toLowerCase()) {
    console.log("La cadena está formada solo por minúsculas.");
  } else {
    console.log(
      "La cadena está formada por una mezcla de mayúsculas y minúsculas."
    );
  }
}

function procesarCadena(cadena) {
  console.log("La cadena ingresada es: " + cadena);
  console.log(
    "La cantidad de caracteres de la cadena es: " + cuentaCaracteres(cadena)
  );
  analizarCadena(cadena);
}

procesarCadena("Hola Mundo!"); 
