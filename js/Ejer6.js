class Libro {
    constructor(isbn, titulo, autor, numDePaginas) {
      this._isbn = isbn;
      this._titulo = titulo;
      this._autor = autor;
      this._numDePaginas = numDePaginas;
    }
    set isbn(valor) {
      this._isbn = valor;
    }
    set titulo(valor) {
      this._titulo = valor;
    }
    set autor(valor) {
      this._autor = valor;
    }
    set numDePaginas(valor) {
      this._numDePaginas = valor;
    }
    get mostrarLibro() {
      return `El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene ${this._numDePaginas} páginas`;
    }
  }
  
  let libro1 = new Libro(
    "9786070737596",
    "100 años de Soldedad",
    " Gabriel Garcia Marquez",
    471
  );
  
  let libro2 = new Libro(
    "9789505630769",
    "Moby Dick",
    "Melville Herman",
    800
  );
  document.write("<h3>", libro1.mostrarLibro, "<br>");
  document.write("<h3>", libro2.mostrarLibro, "<br>");
  
  if (libro1._numDePaginas > libro2._numDePaginas) {
    document.write(
      `<br> <h4>Libro ${libro1._titulo}, tiene más paginas que el libro ${libro2._titulo}.</h4>`
    );
  } else {
    document.write(
      `<br> <h4>Libro ${libro2._titulo}, tiene más paginas que el libro ${libro1._titulo}.</h4>`
    );
  }