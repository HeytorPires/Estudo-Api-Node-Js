import yup from "yup";
// Middleware de validação de schema com Yup
export const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      // Valida os dados no req.body usando o schema definido
      await schema.validate(req.body, { abortEarly: false });
      next(); // Se a validação for bem-sucedida, continue para o próximo middleware
    } catch (err) {
      // Se a validação falhar, envie um erro de resposta
      res.status(400).json({
        message: "Dados inválidos",
        errors: err.errors, // Retorna os erros de validação
      });
    }
  };
};
