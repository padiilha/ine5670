const express = require("express");
const app = express();
const patineteRoutes = require("./route/patineteRoute");
const port = 8081;

app.use(express.json());
app.use("/patinete", patineteRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
