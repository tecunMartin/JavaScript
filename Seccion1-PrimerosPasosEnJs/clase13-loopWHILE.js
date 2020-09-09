var martin = {
    nombre  :'Martin',
    apellido:'Tecun',
    edad    :17,
    peso    :75
};

/* Al inicio del año */
console.log(`Al inicio del año ${martin.nombre} pesa ${martin.peso}kg`);

/* Constantes para repetir menos codigo */
const INCREMENTO_PESO=0.3;
const DIAS_DEL_AÑO =365;

/* Funcion para aumentar de peso */
const aumentarDePeso = persona => persona.peso+=INCREMENTO_PESO;
/* Funcion para disminuir de peso */
const adelgaza = persona => persona.peso-=INCREMENTO_PESO;

/* Funcion para saber cuando aumenta */
const comeMucho = ()=> Math.random() < 0.3;
/* Funcion para saber cuando disminuye */
const realizaDeporte = () => Math.random() < 0.4;

/* Dias que pasaron */
var dias = 0;

/* Peso que recomento la nutriologa */
const META = martin.peso -3;

/* While para saber los dias que paso hasta llegar a la meta */
while(martin.peso > META) {
    if(comeMucho()){
       /* Aumentar de peso */ 
        aumentarDePeso(martin);
    }
    if(realizaDeporte()){
        /* Disminuye de peso */
        adelgaza(martin);
    }
    dias+=1;
}

/* Resultado final */
console.log(`Pasaron ${dias} dias hasta que ${martin.nombre} adelgazo 3KG`);