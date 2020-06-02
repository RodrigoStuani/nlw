import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        "Rodrigo",
        "Thatiani",
        "Eduarda",
        "Sandra"
    ]);
    console.log('Listagem de usuários.');
});

app.listen(3333);