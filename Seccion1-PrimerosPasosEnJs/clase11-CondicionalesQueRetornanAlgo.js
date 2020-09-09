var sacha = {
    nombre: "Sacha",
    apellido:"Lifszyc",
    edad:28,
    ingeniero:true,
    cocinero: true,
    cantante:true,
    dj:true,
    guitarrista:true,
    drone:true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad:13
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero){
        console.log("Ingeniero");
    }
    if (persona.cocinero){
        console.log("Cocinero");
    }
    if (persona.cantante){
        console.log("Cantante");
    }
    if (persona.dj){
        console.log("Dj");
    }
    if (persona.guitarrista){
        console.log("Guitarrista");
    }
    if (persona.drone){
        console.log("Piloto drone");
    }
}
/* imprimirProfesiones(sacha); */

const MAYORIA_DE_EDAD=18;

/* var esMayorDeEdad = function (persona){
    return persona.edad>=MAYORIA_DE_EDAD
}; 
            Es igual a lo de abajo
*/
const esMayorDeEdad = ({ edad }) => edad>=MAYORIA_DE_EDAD

    /* SACHA es menor de EDAD */
    /* SACHA es mayor de EDAD */
function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

/* function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log("ACCESO DENEGADO");
    }
} */

const permitirAcceso = (persona) => 
esMayorDeEdad(persona)?
console.log(`ACCESO ACEPTADO ${persona.nombre}`)
:console.log(`ACCESO DENEGADO ${persona.nombre}`);

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);
permitirAcceso(juan);
permitirAcceso(sacha);
