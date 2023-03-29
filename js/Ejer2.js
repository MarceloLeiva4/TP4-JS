class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
    set ingresar(dinero) {
      this.saldo = dinero + this.saldo;
    }
    set extraer(dinero) {
      this.saldo = this.saldo - dinero;
    }
    get informar() {
      return this.saldo;
    }
  }
  
  let cuenta = new Cuenta((titular = "Alex"));
  
  document.write("ESTADO DE CUENTA: " + cuenta.saldo, "<br>");
  
  // INGRESAR DINERO
  let cantidad_dinero_ingresar = parseInt(
    prompt("Indique la cantidad de dinero a ingresar")
  );
  
  cuenta.ingresar = cantidad_dinero_ingresar;
  document.write("ESTADO DE CUENTA: " + cuenta.saldo, "<br>");
  
  // EXTRAER DINERO
  
  let cantidad_dinero_extraer = parseInt(
    prompt("Indique la cantidad de dinero a extraer")
  );
  
  cuenta.extraer = cantidad_dinero_extraer;
  document.write("ESTADO DE CUENTA: " + cuenta.saldo, "<br>");