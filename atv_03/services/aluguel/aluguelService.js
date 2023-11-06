import { Aluguel } from "./model/aluguel.js";
import { connect } from "./model/db-connection.js";

connect();

export const create = async (hora_inicio, hora_fim, serial) => {
  const newAluguel = new Aluguel({hora_inicio, hora_fim, serial})

  await newAluguel.save();

  return newAluguel;
};

export const read = async (id) => {
  return await Aluguel.findById(id);
};

export const update = async (id, hora_fim) => {
  return await Aluguel.findByIdAndUpdate(id, {hora_fim});
};