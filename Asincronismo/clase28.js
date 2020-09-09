const API_URL    = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id"

/* URL para encontrar a Luk */
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
/* Constante para decir que los datos vienen de otra pagina */
const opts = { crossDomain: true, };

/* Funcion que nos permite concumir los datos */
const onPeopleResponse = function(persona){
    console.log(`Hola yo soy, ${persona.name}`);
};

$.get( lukeUrl, opts, onPeopleResponse);