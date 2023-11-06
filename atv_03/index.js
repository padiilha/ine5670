import { config } from 'dotenv';
import express from 'express';
import aluguelRouter from './routes/aluguelRoute.js';
import pagamentoRouter from './routes/pagamentoRoute.js';
import patineteRouter from './routes/patineteRoute.js';
import usuarioRouter from './routes/usuarioRoute.js';

config();

const app = express();

app.use(express.json());
app.use("/aluguel", aluguelRouter );
app.use("/pagamento", pagamentoRouter);
app.use("/patinete", patineteRouter);
app.use("/usuario", usuarioRouter);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
