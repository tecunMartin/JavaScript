var edad = 27;
/* edad = edad + 1; */
edad += 1;

var peso;
/* peso = 75; */
peso -= 2;

var sandwich = 1;
peso += sandwich;
/* peso += sandwich; */

var jugarFutbol = 3;
peso -= jugarFutbol;

var precioDeVino = 200.3;

/* var total = precioDeVino * 100 * 3 / 100; */
var total = Math.round(precioDeVino * 3 * 100)/100;
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr);



var pizza = 8;
var personas = 2;

var cantidadDePorcionesPorPersonas = pizza / personas;
