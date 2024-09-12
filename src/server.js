import express from "express";
import userRoutes from "./routes/userRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //fazendo o express usar json pra responder as requisições
app.use("/usuarios", userRoutes); //usando e consumindo a rota de user com suas requisições
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // rota de documentação

app.listen(3000, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
  //resposta ao rodar servidor
});
