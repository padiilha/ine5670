require("dotenv").config();

const express = require("express");
const app = express();

const aluguelRoutes = require("./routes/aluguelRoute");
const pagamentoRoutes = require("./routes/pagamentoRoute");
const patineteRoutes = require("./routes/patineteRoute");
const usuarioRoutes = require("./routes/usuarioRoute");

app.use(express.json());
app.use("/aluguel", aluguelRoutes);
app.use("/pagamento", pagamentoRoutes);
app.use("/patinete", patineteRoutes);
app.use("/usuario", usuarioRoutes);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
