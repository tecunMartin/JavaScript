function imprimirNombreYEdad(person) {
    var {name} = person;
    var {age} = person;

    console.log(`Hello, my name is ${name} and i'm ${age} years old. `);
};

var martin = {
    name: "Martin",
    age: 17,
};
var ale = {
    name: "Alejandro",
    age: 20,
};


imprimirNombreYEdad(martin);
imprimirNombreYEdad(ale);