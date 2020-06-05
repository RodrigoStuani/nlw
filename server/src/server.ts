import express, { request, response } from 'express';

const app = express();

// A rota é o endereço completo da requisição.
// Recurso: Qual entidade estamos acessando do sistema.
// GET: Busca uma ou mais informações do back-end.
// POST: cria um nova informação no back-end.
// PUT: Atualiza, faz um update em uma informação.
// DELETE: Remover um inforamção do cliente(back-end).

// POST https://localhost:3030/users = Cria um novo usuário.
// GET https://localhost:3030/users = Mostra lista de usuário.
// GET https://localhost:3030/users/3 = Buscar dados de um usuário específico. 
const users = [
    "Rodrigo",
    "Thatiani",
    "Eduarda",
    "Sandra"
];

app.get('/users', (request, response) => {
    console.log('Listagem de usuários.');
    return response.json(users);    
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];
    return response.json(user);
});

// Rota de criação de um usuário
app.post('/users', (request, response) => {
    const user = {
        nome: 'Covid',
        sobrenome: '19',
        email: 'covid19@aprendizado.com.br'
    }    
    return response.json(user);
});

app.listen(3030);