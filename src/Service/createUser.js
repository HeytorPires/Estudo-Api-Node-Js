// import { prisma } from "../database/Connection";

// export const createUser = async (nameV, emailV, ageV) => {
//   try {
//     const newUser = await prisma.users.create({
//       data: {
//         email: nameV,
//         name: emailV,
//         age: ageV,
//       },
//     });
//     users.push(newUser); // Adicionando o novo usuário criado ao array `users`
//     res.status(201).json({ message: "Deus é bom", user: newUser }); // Responder com a mensagem e o usuário criado
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao criar usuário" }); // Captura e responde com um erro, caso ocorra
//   }
// };
