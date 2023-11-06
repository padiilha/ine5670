import express from 'express';
import { create, read, update } from '../services/pagamento/pagamentoService.js';

const pagamentoRouter = express.Router();

pagamentoRouter.get("/:id", async (req, res) => {
  const pagamento = read(req.params.id);

  res.json(pagamento);
});

pagamentoRouter.post("/new", async (req, res) => {
  const pagamento = create(
    req.body.nome_cartao,
    req.body.numero_cartao,
    req.body.vencimento_cartao,
    req.body.cvv_cartao,
    req.body.valor_total
  );

  res.json(pagamento);
});

pagamentoRouter.put("/:id", async (req, res) => {
  const pagamento = update(
    req.params.id,
    req.body.st_pagamento
  );

  res.json(pagamento);
});

export default pagamentoRouter;
