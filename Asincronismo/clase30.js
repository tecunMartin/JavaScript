const API_URL    = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id"

/* Constante para decir que los datos vienen de otra pagina */
const opts = { crossDomain: true, };

/* Funcion que nos permite concumir los datos */

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get( url, opts, callback ).fail(()=>{
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
    })
};

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola yo soy, ${personaje.name}`);
    obtenerPersonaje(2,function (personaje) {
        console.log(`Hola yo soy, ${personaje.name}`);
        obtenerPersonaje(3,function (personaje) {
            console.log(`Hola yo soy, ${personaje.name}`);
            obtenerPersonaje(4,function(personaje) {
                console.log(`Hola yo soy, ${personaje.name}`);
                obtenerPersonaje(5,function(personaje) {
                    console.log(`Hola yo soy, ${personaje.name}`);
                    obtenerPersonaje(6,function(personaje) {
                        console.log(`Hola yo soy, ${personaje.name}`);
                        obtenerPersonaje(7,function(personaje) {
                            console.log(`Hola yo soy, ${personaje.name}`);
                        });
                    });
                });
            });
        });
    }); 
});