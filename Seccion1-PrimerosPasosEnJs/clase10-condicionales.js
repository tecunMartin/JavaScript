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

imprimirProfesiones(sacha);


