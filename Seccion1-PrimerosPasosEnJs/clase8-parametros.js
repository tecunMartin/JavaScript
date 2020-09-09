var sacha = {
    nombre: "sacha",
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
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
/* imprimirNombreEnMayusculas({apellido:"Gomez"}); */



function Cumpleanos(persona) {
    return{
        ...persona,
        edad: persona.edad+=1
    }
}

console.log(dario);
var darioViejo = Cumpleanos(dario);
console.log(darioViejo);
