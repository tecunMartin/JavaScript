var signo = prompt("¿Cuál es tu signo?").toUpperCase();

switch (signo){
    case "ARIES":
        console.log(`${signo}: Deje de ser tan obstinado en la vida. Intente ver más allá de lo que su manía le permite, ya que pronto entenderá que estaba equivocado.`);
    break;
    case "TAURO":
        console.log(`${signo}: Será de suma importancia que empiece a moderar cada uno de sus impulsos y piense dos veces antes de tomar una determinación fundamental en su vida.`);
    break;
    case "GÉMINIS":
    case "GEMINIS":
        console.log(`${signo}: Aunque todo cambio le genere inseguridad, ya es el momento para que avance en su vida. No dude en arriesgar por más que tenga obstáculos en el camino.`);
    break;
    case "CÁNCER":
    case "CANCER":
        console.log(`${signo}: Intente minimizar los problemas, ya que no todo es tan dramático como parece. Tenga paciencia y en poco tiempo podrá olvidar sus preocupaciones.`);
    break;
    case "LEO":
        console.log(`${signo}: Sepa que sus dotes inteligentes harán que finalmente encuentre la solución exacta para ese problema que lo aqueja hace días. Soluciónelo hoy mismo.`);
    break;
    case "VIRGO":
        console.log(`${signo}: Probablemente será un período de dudas y cierto negativismo con la gente que se rodea. Momento para conocer gente nueva y cambiar el entorno afectivo.`);
    break;
    case "LIBRA":
        console.log(`${signo}: Aprenda a manejar esa tendencia que tiene a decir todo lo que piensa sin importarle lo que los demás piensan, ya que puede traerle más de una complicación.`);
    break;
    case "ESCORPIO":
        console.log(`${signo}: Comprenda que muchas veces la libertad no siempre es peligrosa en la vida. A veces ayuda a asomar lo mejor que uno tiene en su interior y no lo demuestra.`);
    break;
    case "SAGITARIO":
        console.log(`${signo}: Gracias a su elevada intuición obtendrá la respuesta adecuada para ayudar a esa persona que le ha pedido un consejo. No le de vuelta la cara y bríndele su ayuda.`);
    break;
    case "CAPRICORNIO":
        console.log(`${signo}: Deje de presionarse, ya que el tiempo actuará a su favor. En esta jornada, su tenacidad y optimismo serán puestos a prueba y tendrá muy buenos resultados.`);
    break;
    case "ACUARIO":
        console.log(`${signo}: Sepa que podría llegar a cometer una gran injusticia, si sigue juzgando con severidad las situaciones o a las personas que no conoce demasiado.`);
    break;
    case "PISCIS":
        console.log(`${signo}: Comprenda que no siempre hay una explicación racional para las situaciones a las que nos enfrentamos. Disfrute de lo bueno y déjese fluir.`);
    break;
    default:
        console.log('No es un signo zodiacal valido');
    break;
};