function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad>=18){
        console.log(`Felicidades ${persona.nombre} eres mayor de edad.`);
    }else if(persona.edad<18 && persona.edad>0){
        console.log(`Lo siento ${persona.nombre} eres menor de edad.`);
    }else{
        console.log(`Ni has nacido ${persona.nombre}`);
    }
}
var martin = {
    nombre:"Martin",
    edad:17,
};
imprimirSiEsMayorDeEdad(martin);