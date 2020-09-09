function heredaDe(protipoHijo,protipoPadre) {
    var fn = function (params){}
    fn.prototype = protipoPadre.prototype;
    protipoHijo.prototype = new fn;
    claseHija.prototype.constructor = protipoHijo;
};

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
    return this.altura>=ALTURA_MAXIMA;
};

function Desarrollador(nombre,apellido) {
    this.nombre=nombre;
    this.apellido=apellido;
};

heredaDe(Desarrollador, persona);

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
};

var martin = new persona('Martin','Tecun',1.76);
var martin = new Desarrollador('Sacha','Perez',1.88);


/* Con esto ya podemos hacer multiples personas */
/* var sacha  = new persona('Sacha','Lifsyc', 1.8);
var ericka = new persona('Ericka','Luna', 1.52);
var arturo = new persona('Arturo','Martinez', 1.90); */