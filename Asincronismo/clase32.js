const API_URL    = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id"

/* Constante para decir que los datos vienen de otra pagina */
const opts = { crossDomain: true, };

/* Funcion que nos permite concumir los datos */

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}/`;
        $.get( url, opts,( data )=>{
            resolve(data);
        }).fail(()=>reject(id));
    });
};

function onError (id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
.then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`);
})
.catch(onError);

/* obtenerPersonaje(1, function (personaje) {
    console.log(`Hola yo soy, ${personaje.name}`);
}); */