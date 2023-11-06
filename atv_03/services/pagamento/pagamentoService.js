import { connect } from "./model/db-connection.js";
import { Pagamento } from "./model/pagamento.js";

connect();

export const create = async (nome_cartao, numero_cartao, vencimento_cartao, cvv_cartao, valor_total) => {
  const newPagamento = new Pagamento({nome_cartao, numero_cartao, vencimento_cartao, cvv_cartao, valor_total})

  await newPagamento.save();

  return newPagamento;
};

export const read = async (id) => {
  return await Pagamento.findById(id);
};

export const update = async (id, st_pagamento) => {
  return await Pagamento.findByIdAndUpdate(id, {st_pagamento});
};
