const express = require("express");
const router = express.Router();

const AluguelService = require("../services/aluguel/aluguelService");
const api = require("../api")

router.get("/:id", (req, res) => {
  const aluguel = AluguelService.read(req.params.id);

  res.json(aluguel);
});

router.post("/new", async (req, res) => {
  const aluguel = AluguelService.create(
    req.body.hora_inicio,
    req.body.hora_fim,
    req.body.serial
  );

  await api.put("/patinete/:id", {"st_patinete": req.body.st_patinete});

  res.json(aluguel);
});

router.put("/:id", async (req, res) => {
  const aluguel = AluguelService.update(
    req.params.id,
    req.body.hora_fim
  );

  await api.post("/pagamento/new", {
    "nome_cartao": req.body.nome_cartao,
    "numero_cartao": req.body.numero_cartao,
    "vencimento_cartao": req.body.vencimento_cartao,
    "cvv_cartao": req.body.cvv_cartao,
    "valor_total": req.body.valor_total
  });

  res.json(aluguel);
});

module.exports = router;
