import mongoose from "mongoose";

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
    serial: {
      type: String,
      require: true,
    },
});

export const Aluguel = mongoose.model("Aluguel", AluguelSchema);