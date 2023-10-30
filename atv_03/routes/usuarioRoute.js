const express = require("express");
const router = express.Router();

const UsuarioService = require("../services/usuario/usuarioService");

router.get("/:id", (req, res) => {
  const usuario = UsuarioService.read(req.params.id);

  res.json(usuario);
});

router.post("/new", (req, res) => {
  const usuario = UsuarioService.create(
    req.body.nome,
    req.body.cpf,
    req.body.email,
    req.body.telefone
  );

  res.json(usuario);
});

router.put("/:id", (req, res) => {
  const usuario = UsuarioService.update(
    req.params.id,
    req.body.nome,
    req.body.cpf,
    req.body.email,
    req.body.telefone
  );

  res.json(usuario);
});

router.delete("/:id", (req, res) => {
  const result = UsuarioService.remove(req.params.id);

  res.json(result);
});

module.exports = router;
