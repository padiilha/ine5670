require("./model/db-connection");
const Pagamento = require("./model/pagamento");

const create = async (nome_cartao, numero_cartao, vencimento_cartao, cvv_cartao, valor_total) => {
  const newPagamento = new Pagamento(nome_cartao, numero_cartao, vencimento_cartao, cvv_cartao, valor_total, false)

  await newPagamento.save();

  return newPagamento;
};

const read = async (id) => {
  return await Pagamento.findById(id);
};

const update = async (id, st_pagamento) => {
  return await Pagamento.findByIdAndUpdate(id, {st_pagamento});
};
