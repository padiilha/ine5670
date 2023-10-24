const express = require("express");
const router = express.Router();

const UsuarioService = require("../services/usuarioService");

router.get("/:id", async (req, res) => {
  const usuario = UsuarioService.read(req.params.id);

  res.json(usuario);
});

router.post("/new", async (req, res) => {
  const usuario = UsuarioService.create(
    req.body.nome,
    req.body.cpf,
    req.body.email,
    req.body.telefone
  );

  res.json(usuario);
});

router.put("/update/:id", async (req, res) => {
  const usuario = UsuarioService.update(
    req.params.id,
    req.body.nome,
    req.body.cpf,
    req.body.email,
    req.body.telefone
  );

  res.json(usuario);
});

router.delete("remove/:id", async (req, res) => {
  const result = UsuarioService.remove(req.params.id);

  res.json(result);
});

module.exports = router;
