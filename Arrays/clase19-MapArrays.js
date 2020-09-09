var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula];
/* console.log(personas); */


/* Variable para saber los altos y bajos */
const ALTURA = 1.8;

/* Codicion para saber si es la persona es alta */
const esAlta = (persona) => persona.altura>ALTURA;
var personasAltas = personas.filter(esAlta);
/* console.log(personasAltas); */

/* Codigo para saber las personas bajas */
const esBajo =(persona)=> persona.altura<ALTURA;
var personaBajas = personas.filter(esBajo);
/* console.log(personaBajas); */


/* Funcion que nos da un objeto nuevo, y modifica un objeto */
/* const pasarAlturaCMS = (persona) =>{
    return {
        ...persona,
        altura: persona.altura*100
    }
} 
            ES IGUAL QUE AL DE ABAJO
*/
const pasarAlturaCMS = (persona)=>({
    ...persona,
    altura: persona.altura*100
});


/* Funcion que recorre la funcion */
var personasCMS = personas.map(pasarAlturaCMS);

console.log(personasCMS);
console.log(personas);