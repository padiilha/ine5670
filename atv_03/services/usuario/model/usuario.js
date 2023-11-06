import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },
});

export const Usuario = mongoose.model("Usuario", UsuarioSchema);
