import express, { request, response } from 'express';

const app = express();

app.use(express.json());

// A rota é o endereço completo da requisição.
// Recurso: Qual entidade estamos acessando do sistema.
// GET: Busca uma ou mais informações do back-end.
// POST: cria um nova informação no back-end.
// PUT: Atualiza, faz um update em uma informação.
// DELETE: Remover um inforamção do cliente(back-end).

// POST https://localhost:3030/users = Cria um novo usuário.
// GET https://localhost:3030/users = Mostra lista de usuário.
// GET https://localhost:3030/users/3 = Buscar dados de um usuário específico. 

// Query Param: São parametros que vem na propria rota geralmente opcionais para filtros, paginação.
// Request Body: Parametros para criação/atualização de informações do usuário.
const users = [
    "Rodrigo",
    "Thatiani",
    "Eduarda",
    "Sandra"
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filterUsers = search ? users.filter(user => user.includes(search)) : users;

    console.log(search);
    return response.json(filterUsers);    
});

app.get('/users/:id', (request, response) => {
    // Request Param: São parametros que vem na própria rota que identificam um recurso
    const id = Number(request.params.id);    

    const user = users[id];
    return response.json(user);
});

// Rota de criação de um usuário
app.post('/users', (request, response) => {
    const data = request.body; 
    console.log(data);
    const user = {
        nome: data.name,
        email: data.email
    }    
    return response.json(user);
});

app.listen(9090);