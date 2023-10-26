const express = require("express");
const router = express.Router();

const PatineteService = require("../service/patineteService");

router.get("/:id", async (req, res) => {
  const patinete = PatineteService.read(req.params.id);

  res.json(patinete);
});

router.post("/new", async (req, res) => {
  const patinete = PatineteService.create(
    req.body.serial,
    req.body.st_patinete,
    req.body.latitude,
    req.body.longitude
  );

  res.json(patinete);
});

router.put("/update/:id", async (req, res) => {
  const patinete = PatineteService.update(
    req.params.id,
    req.body.serial,
    req.body.st_patinete,
    req.body.latitude,
    req.body.longitude
  );

  res.json(patinete);
});

router.delete("remove/:id", async (req, res) => {
  const result = PatineteService.remove(req.params.id);

  res.json(result);
});

module.exports = router;
