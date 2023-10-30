const mongoose = require("mongoose");
const database = "pagamentos"

require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${database}`);
    console.log(`Connected to MongoDB -> ${database}`);
  } catch (e) {
    console.error(e);
  }
}

module.exports = connect();
