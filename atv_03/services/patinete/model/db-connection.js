import { config } from 'dotenv';
import mongoose from "mongoose";

config();

const database = "patinetes"

export async function connect() {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${database}`);
    console.log(`Connected to MongoDB -> ${database}`);
  } catch (e) {
    console.error(e);
  }
}
