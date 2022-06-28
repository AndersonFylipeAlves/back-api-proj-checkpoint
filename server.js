const express = require("express");
const router = require("./src/routes/router")
const database = require("./src/database/database")
const cors = require("cors");

const app = express();
const port = 3000;

database.once("open", () => console.log("conexao feita com sucesso"));
database.on("error", () => console.log("conexao quebrada! houve um erro"));

app.use(cors());
app.use(express.json())
app.use("/data", router)

app.listen(port, () => {
    console.log(`o servidor disponivel em http://localhost:${port}`)
})