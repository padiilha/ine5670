const express = require("express");
const router = express.Router();

const AluguelService = require("../service/aluguelService");

router.get("/:id", async (req, res) => {
  const aluguel = AluguelService.read(req.params.id);

  res.json(aluguel);
});

router.post("/new", async (req, res) => {
  const aluguel = AluguelService.create(
    req.body.hora_inicio,
    req.body.hora_fim,
    req.body.st_patinete
  );

  res.json(aluguel);
});

router.put("/update/:id", async (req, res) => {
  const aluguel = AluguelService.update(
    req.params.id,
    req.body.hora_inicio,
    req.body.hora_fim,
    req.body.st_patinete
  );

  res.json(aluguel);
});

module.exports = router;
