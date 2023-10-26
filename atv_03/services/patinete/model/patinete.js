const mongoose = require("mongoose");
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

const Patinete = mongoose.model("Patinete", PatineteSchema);

module.exports = Patinete;
