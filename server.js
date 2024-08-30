import express from "express";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const app = express(); // passando a lib Express para o const app
app.use(express.json()); // passar ao express que ira usar JSON

const users = [];

app.post("/usuarios", async (req, res) => {
  const newUser = await prisma.users.create({
    // const de cada registro {Newuser}
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  users.push(newUser); // Adicionando o usuário criado à lista
  res.status(201).json({ message: "Deus é bom", user: newUser }); // Respondendo com a mensagem e o usuário criado
});

app.get("/usuarios", async (req, res) => {
  const users = await prisma.users.findMany();
  res.status(200).json(users); // Respondendo com a lista de usuários
});

//listando com queryParams
app.get("/usuarios/findOne", async (req, res) => {
  try {
    let users;
    const { email } = req.query; // Obtém o parâmetro de consulta "email"

    users = await prisma.users.findMany({
      where: {
        email: email,
      },
    });

    res.status(200).json(users); // Responde com a lista de usuários
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ error: "Erro ao listar usuários" }); // imprime o erro
  }
});

// passando id como parametro do params
app.put("/usuarios/:id", async (req, res) => {
  const newUser = await prisma.users.update({
    //condição para onde buscar para atualizar
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  users.push(newUser); // Adicionando o usuário criado à lista
  res.status(201).json({ message: "Deus é bom", user: newUser }); // Respondendo com a mensagem e o usuário criado
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.users.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Deletado com sucesso! Glória a Deus" }); // Responde com status 200 e a mensagem de sucesso
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
});

app.listen(3000, () => {
  //respondendo ao rodar servidor
  console.log("Servidor rodando na porta 3000");
});
// para rodar " node --watch server.js"
//npx prisma db
