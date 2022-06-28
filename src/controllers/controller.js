const User = require("../models/user");

class controller {

    static produtoRegister = async (req, res) => {
        console.log("cadastro!");

        const { titulo } = req.body;
        // const email = req.body.email;

        const possibleProduto = await User.findOne({ titulo })

        if (possibleProduto) {
            return res.status(400).send({ error: "Produto ja cadastrado"})
        }
    
        const produto = await User.create(req.body)

        return res.status(200).send({ produto })
    }

    static produtoGet = async (req, res) => {
        console.log("visualizar!");

        const possibleProduto = await User.find()

        res.status(200).send(possibleProduto)
       
    }

    static produtoGetById = async (req, res) => {
        console.log("visualizarOne!");

        const possibleProduto = await User.find()
        
        const produtoId = req.params.id
        
        res.status(200).send(possibleProduto[produtoId])
       
    }

}

module.exports = controller;


// modo antigo


// userController.getUserById = (req, res) => {
//     const userId = req.params.id
//     res.send(fake_database[userId])
// }

// userController.getUser = (req, res) => {
//     res.send(fake_database)
// }

// userController.createUser = (req, res) => {
//     const newUser = req.body
//     fake_database.push(newUser)
//     res.status(200).send(newUser)
// }

// userController.putUser = (req, res) => {
//     const userId = req.params.id
//     const oldUser = fake_database[userId]
//     const newUser = req.body
//     fake_database[userId] = {...oldUser, ...newUser}
//     res.send(fake_database[userId])
// }

// userController.deleteUser = (req, res) => {
//     const userId = req.params.id
//     fake_database[userId] = {}
//     res.send(fake_database[userId])
// }

// module.exports = userController

