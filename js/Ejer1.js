let auto = {
    //Propiedades de Auto
    marca: 'Ford',
    modelo: 'Fiesta',
    color: 'Rojo',
    anio: '2014',
    fabricacion: 'Mexico',
    
    //Metodos de Auto
    encender: () => {
        document.write('<p> El Auto esta Encendido!! </p>');
    },
     apagar:() => {
        document.write('El Auto esta Apagado!!');
     }
}

document.write(`Auto : ${auto.marca}`);
document.write(`<br>Modelo : ${auto.modelo}`);
document.write(`<br>Color : ${auto.color}`);
document.write(`<br>Anio : ${auto.anio}`);
document.write(`<br>Fabricacion : ${auto.fabricacion}`);

auto.encender();
auto.apagar()