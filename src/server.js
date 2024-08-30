import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json()); //fazendo o express usar json pra responder as requisições
app.use("/usuarios", userRoutes); //usando e consumindo a rota de user com suas requisições

app.listen(3000, () => {
  console.log("Servidor Rodando na porta 3000");
  //resposta ao rodar servidor
});
