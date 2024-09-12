import yup from "yup";

// Schema Yup para o objeto 'user'
export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .required("Nome é obrigatório"),

  age: yup
    .number()
    .positive("A idade deve ser um número positivo")
    .integer("A idade deve ser um número inteiro")
    .min(18, "Idade mínima é 18")
    .max(100, "Idade máxima é 100")
    .required("Idade é obrigatória"),

  email: yup
    .string()
    .required("Email é obrigatório")
    .min(14, "O email deve ter mais de 14 caracteres"),
});
