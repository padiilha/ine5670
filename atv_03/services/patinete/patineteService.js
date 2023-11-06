import { connect } from './model/db-connection.js';
import { Patinete } from './model/patinete.js';

connect();

export const create = async (serial, st_patinete, latitude, longitude) => {
  const newPatinete = new Patinete({serial, st_patinete, latitude, longitude});

  await newPatinete.save();

  return newPatinete;
};

export const read = async (id) => {
  return await Patinete.findById(id);
};

export const update = async (id, st_patinete, latitude, longitude) => {
  return await Patinete.findByIdAndUpdate(id, {st_patinete, latitude, longitude});
};

export const remove = async (id) => {
  return await Patinete.findByIdAndDelete(id);
};
