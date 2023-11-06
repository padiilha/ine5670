import express from 'express';
import { create, read, remove, update } from '../services/patinete/patineteService.js';

const patineteRouter = express.Router();

patineteRouter.get("/:id", async (req, res) => {
  const patinete = await read(req.params.id);

  res.json(patinete);
});

patineteRouter.post("/new", (req, res) => {
  const patinete = create(
    req.body.serial,
    req.body.st_patinete,
    req.body.latitude,
    req.body.longitude
  );

  res.json(patinete);
});

patineteRouter.put("/:id", (req, res) => {
  const patinete = update(
    req.params.id,
    req.body.st_patinete,
    req.body.latitude,
    req.body.longitude
  );

  res.json(patinete);
});

patineteRouter.delete("/:id", (req, res) => {
  const result = remove(req.params.id);

  res.json(result);
});

export default patineteRouter;
