const express = require("express");
const userController = require("../controllers/controller")

const router = express.Router()



router.post("/produto", userController.produtoRegister)

router.get("/all", userController.produtoGet)

router.get("/produto/:id", userController.produtoGetById)

// router.put("/usuario/:id", userController.putUser)

// router.delete("/usuario/:id", userController.deleteUser)

module.exports = router