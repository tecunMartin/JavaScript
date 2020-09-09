var martin = {
    nombre  :'Martin',
    apellido:'Tecun',
    edad    :17,
    peso    :75
};

console.log(`Al inicio del año ${martin.nombre} pesa ${martin.peso}kg`);

const INCREMENTO_PESO=0.2;
const DIAS_DEL_AÑO =365;

const aumentarDePeso = persona => persona.peso+=INCREMENTO_PESO;
const adelgaza = persona => persona.peso-=INCREMENTO_PESO;

for(var dias=1; dias<=DIAS_DEL_AÑO; dias++){
    var random = Math.random();

    if(random < 0.25){
        //Aumenta de peso
        aumentarDePeso(martin);
    } else if(random < 0.50){
        //Adelgaza
        adelgaza(martin);
    }
};

console.log(`Al final del año ${martin.nombre} pesa ${martin.peso.toFixed(2)}kg`);