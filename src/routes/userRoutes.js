import express from "express";
import * as userController from "../controller/userController.js";
const router = express.Router(); // instanciando o router do express em uma variavel

//Rotas e seus metodos de requisição
router.get("/", userController.getAllUsers);
router.get("/findByEmail/:email", userController.getUsersByEmail);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
