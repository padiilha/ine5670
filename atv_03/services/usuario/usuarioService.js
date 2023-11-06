import { connect } from "./model/db-connection.js";
import { Usuario } from "./model/usuario.js";

connect();

export const create = async (nome, cpf, email, telefone) => {
  const newUsuario = new Usuario({nome, cpf, email, telefone});
  
  await newUsuario.save();

  return newUsuario;
};

export const read = async (id) => {
  return await Usuario.findById(id);
};

export const update = async (id, nome, cpf, email, telefone) => {
  return await Usuario.findByIdAndUpdate(id, {nome, cpf, email, telefone});
};

export const remove = async (id) => {
  return await Usuario.findByIdAndDelete(id);
};
