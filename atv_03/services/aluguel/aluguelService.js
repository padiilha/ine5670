require("./model/db-connection");
const Aluguel = require("./model/aluguel");

const create = async (hora_inicio, hora_fim, serial) => {
  const newAluguel = new Aluguel(hora_inicio, hora_fim, serial)

  await newAluguel.save();

  return newAluguel;
};

const read = async (id) => {
  return await Aluguel.findById(id);
};

const update = async (id, hora_fim) => {
  return await Aluguel.findByIdAndUpdate(id, {hora_fim});
};