import * as userService from "../service/userService.js";

export const getUsersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const users = await userService.getUsersByEmail(email);
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ error: "Erro ao listar usuários" });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await userService.getUsersById(id);
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ error: "Erro ao listar usuários" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log("Erro ao listar Usuarios: ", error);
    res.status(500).json({ error: "Erro ao listar usuarios" });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user: newUser });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await userService.UpdateUser(id, req.body);
    res
      .status(200)
      .json({ message: "Usuário atualizado com sucesso", user: updatedUser });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userService.deleteUser(id);
    res.status(200).json({ message: "Usúario deletado com Sucesso!" });
  } catch (error) {
    console.log("Erro ao deletar usuario: ", error);
    res.status((500).json({ error: "Erro ao deletar usuário" }));
  }
};
