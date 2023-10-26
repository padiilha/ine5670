const express = require("express");
const app = express();
const usuarioRoutes = require("./route/usuarioRoute");
const port = 8080;

app.use(express.json());
app.use("/usuario", usuarioRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
