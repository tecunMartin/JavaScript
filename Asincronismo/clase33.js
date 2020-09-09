const API_URL    = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id"

/* Constante para decir que los datos vienen de otra pagina */
const opts = { crossDomain: true, };

/* Funcion que nos permite concumir los datos */

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}/`;
        $
         .get( url, opts,function ( data ){
            resolve(data);
        }).fail(()=>reject(id));
    });
};

function onError (id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
.then(function (personaje1) {
    console.log(`El personaje 1 es ${personaje1.name}`);
    return obtenerPersonaje(2);
})
.then(function (personaje2) {
    console.log(`El personaje 2 es ${personaje2.name}`);
    return obtenerPersonaje(3);
})
.then(function (personaje3) {
    console.log(`El personaje 3 es ${personaje3.name}`);
    return obtenerPersonaje(4);
})
.then(function (personaje4) {
    console.log(`El personaje 4 es ${personaje4.name}`);
    return obtenerPersonaje(5);
})
.then(function (personaje5) {
    console.log(`El personaje 5 es ${personaje5.name}`);
    return obtenerPersonaje(6);
})
.then(function (personaje6) {
    console.log(`El personaje 6 es ${personaje6.name}`);
    return obtenerPersonaje(7);
})
.then(function (personaje7) {
    console.log(`El personaje 7 es ${personaje7.name}`);
})
.catch(onError);