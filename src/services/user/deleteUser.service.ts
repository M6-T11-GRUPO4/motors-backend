import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const deleteUserService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  await prisma.user.delete({
    where: {
      id,
    },
  });

  return;
};

export default deleteUserService;
