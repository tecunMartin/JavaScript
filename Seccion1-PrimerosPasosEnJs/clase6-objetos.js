var sacha = {
    nombre: "Martin",
    apellido: "Tecún",
    edad: 17,
};

var dario = {
    nombre: "Dario",
    apellido: "Susnisky",
    edad: 27,
}

function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
/* imprimirNombreEnMayusculas({apellido:"Gomez"}); */