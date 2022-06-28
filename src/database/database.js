const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/produtosAceComp");

let database = mongoose.connection;

module.exports = database;