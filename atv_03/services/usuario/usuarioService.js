require("./model/db-connection");
const Usuario = require("./model/usuario");

const create = async (nome, cpf, email, telefone) => {
  const newUsuario = new Usuario(nome, cpf, email, telefone);
  
  await newUsuario.save();

  return newUsuario;
};

const read = async (id) => {
  return await Usuario.findById(id);
};

const update = async (id, nome, cpf, email, telefone) => {
  return await Usuario.findByIdAndUpdate(id, {nome, cpf, email, telefone});
};

const remove = async (id) => {
  return await Usuario.findByIdAndDelete(id);
};
