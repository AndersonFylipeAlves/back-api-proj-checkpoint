const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        foto1: {
            type: String,
            required: true
        },
        foto2: {
            type: String,
            required: true
        },
        foto3: {
            type: String,
            required: true
        },
        foto4: {
            type: String,
            required: true
        },
        foto5: {
            type: String,
            required: true
        },
        foto6: {
            type: String,
            required: true
        },
        fotoGrande: {
            type: String,
            required: true
        },
        precoSemDesconto: {
            type: String,
            required: true
        },
        precoComDesconto: {
            type: String,
            required: true
        },
        quantidade: {
            type: String,
            required: true
        },
        desconto: {
            type: String,
            required: true
        },
        descricaoDoProduto: {
            type: String,
            required: true
        },
        informacoesTecnicas: {
            type: String,
            required: true
        }
    }
)

// {
// 	"titulo": "",
// 	"foto1": "",
// 	"foto2": "",
// 	"foto3": "",
// 	"foto4": "",
// 	"foto5": "",
// 	"foto6": "",
// 	"fotoGrande": "",
// 	"precoSemDesconto": "",
// 	"precoComDesconto": "",
// 	"quantidade": "",
// 	"descricaoDoProduto": "",
// 	"informacoesTecnicas": ""
// }

const User = mongoose.model("User", userSchema);
module.exports = User;