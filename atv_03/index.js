const express = require("express");
const app = express();

const port = 8080;

app.use(express.json());

const usuarioRoutes = require("./routes/usuarioRoute");
const patineteRoutes = require("./routes/patineteRoute");
const aluguelRoutes = require("./routes/aluguelRoute");
const controlePatinetesRoutes = require("./routes/controlePatinetes");
const pagamentoRoutes = require("./routes/pagamentoRoute");

app.use("/usuario", usuarioRoutes);
app.use("/patinetes", patineteRoutes);
app.use("/aluguel", aluguelRoutes);
app.use("/controlePatinetes", controlePatinetesRoutes);
app.use("/pagamento", pagamentoRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
