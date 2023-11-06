import express from 'express';
import api from '../api.js';
import { create, read, update } from '../services/aluguel/aluguelService.js';

const aluguelRouter = express.Router();

aluguelRouter.get("/:id", async (req, res) => {
  const aluguel = await read(req.params.id);

  res.json(aluguel);
});

aluguelRouter.post("/new", async (req, res) => {
  const aluguel = await create(
    req.body.hora_inicio,
    req.body.hora_fim,
    req.body.serial
  );

  await api.put(`/patinete/${req.body.id_patinete}`, {"st_patinete": req.body.st_patinete});

  res.json(aluguel);
});

aluguelRouter.put("/:id", async (req, res) => {
  const aluguel = update(
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

export default aluguelRouter;
