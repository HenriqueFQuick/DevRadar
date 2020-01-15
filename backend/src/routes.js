const { Router } = require('express');

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index);

//Metodos HTTP
//get, post, put, delete...

//Tipos Parametros
//Query Params: visiveis na rota (ex: http://localhost:3000/?teste=teste) -> requset.query (Filtros,ordenacao, paginacao...)
//Route Params: visiveis na rota (ex: http://localhost:3000/1) -> request.params (identificar um recurso na alteracao ou delecao)
//Body: request.body (Usados para a criacao ou alteracao de um registro)
/*
routes.get('/', (request, response) => {
    console.log(request.query)
    return response.json({ message: 'Hello World'});
});
routes.delete('/users/:id', (request, response) => {
    console.log(request.params)
    return response.json({ message: 'Hello World'});
});
routes.post('/users/:id', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello World'});
});
*/

module.exports = routes;