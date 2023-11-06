import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PagamentoSchema = new Schema({
    nome_cartao: {
        type: String,
        require: true,
    },
    numero_cartao: {
        type: String,
        require: true,
    },
    vencimento_cartao: {
        type: String,
        require: true,
    },
    cvv_cartao: {
        type: String,
        require: true,
    },
    valor_total: {
      type: String,
      require: true,
    },
    st_pagamento: {
      type: Boolean,
      require: true,
    },
});

export const Pagamento = mongoose.model("Pagamento", PagamentoSchema);
