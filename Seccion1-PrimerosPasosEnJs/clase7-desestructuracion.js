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

function imprimirNombreEnMayusculas(persona){
    /* Esto es igual a:  var nombre = persona.nombre */
    var {nombre} = persona;
    console.log(nombre.tuUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
/* imprimirNombreEnMayusculas({apellido:"Gomez"}); */