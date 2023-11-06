import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PatineteSchema = new Schema({
    serial: {
      type: String,
      require: true,
    },
    st_patinete: {
      type: Boolean,
      require: true,
    },
    latitude: {
      type: String,
      require: true,
    },
    longitude: {
      type: String,
      require: true,
    },
});

export const Patinete = mongoose.model("Patinete", PatineteSchema);
