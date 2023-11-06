import express from 'express';
import { create, read, remove, update } from '../services/usuario/usuarioService.js';

const usuarioRouter = express.Router();

usuarioRouter.get("/:id", async (req, res) => {
  const usuario = await read(req.params.id);

  res.json(usuario);
});

usuarioRouter.post("/new", (req, res) => {
  const usuario = create(
    req.body.nome,
    req.body.cpf,
    req.body.email,
    req.body.telefone
  );

  res.json(usuario);
});

usuarioRouter.put("/:id", (req, res) => {
  const usuario = update(
    req.params.id,
    req.body.nome,
    req.body.cpf,
    req.body.email,
    req.body.telefone
  );

  res.json(usuario);
});

usuarioRouter.delete("/:id", (req, res) => {
  const result = remove(req.params.id);

  res.json(result);
});

export default usuarioRouter;
