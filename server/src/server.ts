import express, { request, response } from 'express';

const app = express();

// A rota é o endereço completo da requisição.
// Recurso: Qual entidade estamos acessando do sistema.
// GET: Busca uma ou mais informações do back-end.
// POST: cria um nova informação no back-end.
// PUT: Atualiza, faz um update em uma informação.
// DELETE: Remover um inforamção do cliente(back-end).

app.get('/users', (request, response) => {
    response.json([
        "Rodrigo",
        "Thatiani",
        "Eduarda",
        "Sandra"
    ]);
    console.log('Listagem de usuários.');
});

app.post('/users', (request, response) => () {
    const user = {
        nome: 'Covid',
        sobrenome: '19',
        email: 'covid19@aprendizado.com.br'
    }    

    return response.json(user);
});
app.listen(3333);