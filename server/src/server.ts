import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

//Informar a porta de acesso para o servidor back-end
//localhost:3333
app.listen(3333);
