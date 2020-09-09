class persona{
    constructor (nombre, apellido, altura) {
        this.nombre   =nombre;
        this.apellido =apellido;
        this.altura   =altura;
    };
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    saberSiSoyAlto(){
        return this.altura>=1.8;
    }
};

var martin = new persona('Martin','Tecun',1.76);
console.log(martin.saberSiSoyAlto());
console.log(martin.saludar());

class Desarrollador extends persona{
    constructor (nombre,apellido,altura) {
        super(nombre,apellido,altura);
    };

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    };
}

var sacha = new Desarrollador('Sacha','charles',1.88);
console.log(sacha.saberSiSoyAlto());
console.log(sacha.saludar());

/*

var martin = new Desarrollador('Sacha','Perez',1.88); */


/* Con esto ya podemos hacer multiples personas */
/* var sacha  = new persona('Sacha','Lifsyc', 1.8);
var ericka = new persona('Ericka','Luna', 1.52);
var arturo = new persona('Arturo','Martinez', 1.90); */