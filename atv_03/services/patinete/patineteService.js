require("./model/db-connection");
const Patinete = require("./model/patinete");

const create = async (serial, st_patinete, latitude, longitude) => {
  const newPatinete = new Patinete(serial, st_patinete, latitude, longitude);

  await newPatinete.save();

  return newPatinete;
};

const read = async (id) => {
  return await Patinete.findById(id);
};

const update = async (id, st_patinete, latitude, longitude) => {
  return await Patinete.findByIdAndUpdate(id, {st_patinete, latitude, longitude});
};

const remove = async (id) => {
  return await Patinete.findByIdAndDelete(id);
};
