const express = require("express");
const app = express();
const aluguelRoutes = require("./route/aluguelRoute");
const port = 8082;

app.use(express.json());
app.use("/aluguel", aluguelRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
