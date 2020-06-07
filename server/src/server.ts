import express, { request, response } from 'express';

const app = express();

app.use(express.json());

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