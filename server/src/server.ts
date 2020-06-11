import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);    
const users = [
    "Rodrigo",
    "Thatiani",
    "Eduarda",
    "Sandra"
];

app.listen(3030);