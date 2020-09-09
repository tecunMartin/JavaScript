class persona{
    constructor (nombre, apellido, altura) {
        this.nombre   =nombre;
        this.apellido =apellido;
        this.altura   =altura;
    };
    saludar(fn){
/*      var nombre= this.nombre;
        var apellido= this.apellido; 
                    ES IGUAL A LO DE ABAJO
*/
        var { nombre,apellido } = this;

        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if(fn){
            fn(nombre, apellido, false);
        };
    }
    saberSiSoyAlto(){
        return this.altura>=1.8;
    }
};

var martin = new persona('Martin','Tecun',1.76);
/* console.log(martin.saberSiSoyAlto());
console.log(martin.saludar()); */

class Desarrollador extends persona{
    constructor (nombre,apellido,altura) {
        super(nombre,apellido,altura);
    };
    
    saludar(fn){
/*      var nombre= this.nombre;
        var apellido= this.apellido; 
                    ES IGUAL A LO DE ABAJO
*/
        var { nombre,apellido } = this;
        var nombre
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
        if(fn){
            fn(nombre,apellido,true);
        };
    };
}

var sacha = new Desarrollador('Sacha','charles',1.88);
/* console.log(sacha.saberSiSoyAlto());
console.log(sacha.saludar()); */

function responderSaludo(nombre,apellido,esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Ah mirá, no sabía que eras dev`);
    }
}

var sacha  = new persona('Sacha','Lifsyc', 1.8);
sacha.saludar();
var ericka = new persona('Ericka','Luna', 1.52);
ericka.saludar(responderSaludo);
var arturo = new Desarrollador('Arturo','Martinez', 1.90); 
arturo.saludar(responderSaludo);