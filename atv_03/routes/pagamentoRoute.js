const express = require("express");
const router = express.Router();

const pagamentoService = require("../services/pagamento/pagamentoService");

router.get("/:id", async (req, res) => {
  const pagamento = pagamentoService.read(req.params.id);

  res.json(pagamento);
});

router.post("/new", async (req, res) => {
  const pagamento = pagamentoService.create(
    req.body.nome_cartao,
    req.body.numero_cartao,
    req.body.vencimento_cartao,
    req.body.cvv_cartao,
    req.body.valor_total
  );

  res.json(pagamento);
});

router.put("/:id", async (req, res) => {
  const pagamento = pagamentoService.update(
    req.params.id,
    req.body.st_pagamento
  );

  res.json(pagamento);
});

module.exports = router;
