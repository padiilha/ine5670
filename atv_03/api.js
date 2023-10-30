require("dotenv").config();

const axios = require("axios")
const api = axios.create({baseURL: `${process.env.BASE_URL}:${process.env.PORT}`})

module.export = api;
