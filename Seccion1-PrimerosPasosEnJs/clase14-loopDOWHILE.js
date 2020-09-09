var contador = 0;
const llueve = () => Math.random() < 0.25;


do {
    contador++;
} while(!llueve());

contador==1?
console.log(`Fui a ver si llovia ${contador} vez`):
console.log(`Fui a ver si llovia ${contador} veces`);

/*                  O T R A  M A N E R A  D E  H A C E R L O 
var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`); 
*/

