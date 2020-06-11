import express from 'express';

const routes = express();

routes.get('/', (request, response) => {
    return response.json({message: 'Começando a configurar as rotas de forma diferente e separada.'});    
});

export default routes;