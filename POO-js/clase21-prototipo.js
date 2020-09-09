function persona(nombre, apellido, altura){
    this.nombre   =nombre;
    this.apellido =apellido;
    this.altura   =altura;
};

persona.prototype.saludar=function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

const ALTURA_MAXIMA=1.8;
persona.prototype.saberSiSoyAlto = function(){
    this.altura>=ALTURA_MAXIMA?
    console.log("Soy alto !!!")
    :console.log('Soy bajo !!!');
}

var martin = new persona('Martin','Tecun',1.76);

console.log(martin);
console.log(martin.saludar());
console.log(martin.saberSiSoyAlto());

/* Con esto ya podemos hacer multiples personas */
var sacha  = new persona('Sacha','Lifsyc', 1.8);
var ericka = new persona('Ericka','Luna', 1.52);
var arturo = new persona('Arturo','Martinez', 1.90);