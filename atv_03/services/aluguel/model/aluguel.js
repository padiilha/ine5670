const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AluguelSchema = new Schema({
    hora_inicio: {
      type: String,
      require: true,
    },
    hora_fim: {
      type: String,
      require: false,
    },
    st_patinete: {
      type: Boolean,
      require: true,
    },
});

const Aluguel = mongoose.model("Aluguel", AluguelSchema);

module.exports = Aluguel;