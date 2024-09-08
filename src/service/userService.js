import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsersByEmail = async (email) => {
  return prisma.users.findUnique({
    where: { email: String(email) },
  });
};

export const getUsersById = async (id) => {
  return prisma.users.findUnique({
    where: { id: String(id) },
  });
};

export const getAllUsers = async () => {
  return prisma.users.findMany();
};

export const createUser = async (userData) => {
  return prisma.users.create({
    data: userData,
  });
};

export const UpdateUser = async (id, userData) => {
  return prisma.users.update({
    where: { id },
    data: userData,
  });
};

export const deleteUser = async (id) => {
  return prisma.users.delete({
    where: { id },
  });
};
